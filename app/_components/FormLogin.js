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
import NavLogo from "./NavLogo";

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
          await login(data);
          setIsLoading(false);

          toast.success("success login");
        } catch (e) {
          if (!e.toString().includes("Error: NEXT_REDIRECT")) {
            toast.error(t("the email or password is wrong"));
          } else {
            toast.success("success login");
          }

          setIsLoading(false);
        }
      })}
      className="bg-white  px-9 py-12 rounded-3xl w-full md:w-2/5 space-y-6"
    >
      <div className="text-center space-y-3">
        <NavLogo size={"size-28"} />
        <h2 className=" text-2xl sm:text-5xl font-bold text-second-main">
          {t("Login")}
        </h2>
        <p className="text-sm sm:text-base text-gray-500">
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
          minLength: {
            message: t("the min length is 8"),
            value: 8,
          },
        })}
      />
      <Link
        href={`/${local}/forget-password`}
        className="block text-sm sm:text-base text-gray-500 hover:underline "
      >
        {t("forget password?")}
      </Link>
      <Button className="w-full py-4" disabled={isLoading}>
        {" "}
        {isLoading ? <Spinner /> : t("Login")}
      </Button>
    </form>
  );
}

export default FormLogin;
