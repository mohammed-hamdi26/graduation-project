"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import { useLocale, useTranslations } from "next-intl";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { login } from "../_lib/actions";
import Button from "./Button";
import Input from "./Input";
import Spinner from "./Spinner";

function FormLogin() {
  const t = useTranslations("login");

  const local = useLocale();

  const [isLoading, setIsLoading] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          setIsLoading(true);
          const res = await login(data);
          setIsLoading(false);

          toast.success("success login");
        } catch (e) {
          console.log(e);
          toast.error("error in login");
          setIsLoading(false);
        }
      })}
      className="bg-white  px-9 py-12 rounded-3xl w-full md:w-2/5 space-y-6"
    >
      <div className="text-center space-y-3">
        <h2 className=" text-2xl sm:text-5xl font-bold">{t("Login")}</h2>
        <p className="text-sm sm:text-base">
          {t("Don’t have an ccount?")}{" "}
          <Link
            href={`/${local}/modals`}
            className="text-second-main underline"
          >
            {t("Fill out the form please")}{" "}
          </Link>{" "}
        </p>
      </div>
      <Input
        disabled={isLoading}
        label={t("your email")}
        type="text"
        error={errors?.email?.message}
        register={register("email", {
          required: t("the field is required"),
          // pattern: {
          //   message: "the pattern not matched",
          //   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          // },
        })}
      />
      <Input
        disabled={isLoading}
        label={t("your password")}
        type="password"
        error={errors?.password?.message}
        register={register("password", {
          // pattern: {
          //   message: "the password not match rules",
          //   value:
          //     /^(?=.*[A-Z])[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/,
          // },
          required: t("the field is required"),
          // minLength: {
          //   message: "the min lenght is 8",
          //   value: 8,
          // },
        })}
      />
      <Button className="w-full py-4" disabled={isLoading}>
        {" "}
        {isLoading ? <Spinner /> : t("Login")}
      </Button>
    </form>
  );
}

export default FormLogin;
