"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import Button from "./Button";
import Input from "./Input";
import { login } from "../_lib/actions";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import { useState } from "react";
import Spinner from "./Spinner";

function FormLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        setIsLoading(true);
        const res = await login(data);
        setIsLoading(false);
        if (res) {
          toast.success("success login");
          redirect("/dashboard");
        }
      })}
      className="bg-white  px-9 py-12 rounded-3xl w-full md:w-2/5 space-y-6"
    >
      <div className="text-center space-y-3">
        <h2 className=" text-2xl sm:text-5xl font-bold">Log in</h2>
        <p className="text-sm sm:text-base">
          Don’t have an ccount?{" "}
          <Link href="/form" className="text-second-main underline">
            Fill out the form please{" "}
          </Link>{" "}
        </p>
      </div>
      <Input
        disabled={isLoading}
        label="your email"
        type="text"
        error={errors?.email?.message}
        register={register("email", {
          required: "the field is requeried",
          // pattern: {
          //   message: "the pattern not matched",
          //   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          // },
        })}
      />
      <Input
        disabled={isLoading}
        label="Your password"
        type="password"
        error={errors?.password?.message}
        register={register("password", {
          // pattern: {
          //   message: "the password not match rules",
          //   value:
          //     /^(?=.*[A-Z])[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/,
          // },
          required: "the field is requeried",
          minLength: {
            message: "the min lenght is 8",
            value: 8,
          },
        })}
      />
      <Button className="w-full py-4" disabled={isLoading}>
        {" "}
        {isLoading ? <Spinner /> : "Login"}
      </Button>
    </form>
  );
}

export default FormLogin;
