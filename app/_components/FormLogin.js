"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import Button from "./Button";
import Input from "./Input";
import { login } from "../_lib/actions";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import { redirect } from "next/navigation";

function FormLogin() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const res = await login(data);
        if (res) redirect("/dashboard");
      })}
      className="bg-white  px-9 py-12 rounded-3xl w-full md:w-2/5 space-y-6"
    >
      <div className="text-center space-y-3">
        <h2 className=" text-2xl sm:text-4xl font-medium">Log in</h2>
        <p className="text-sm sm:text-base">
          Don’t have an ccount?{" "}
          <Link href="/form" className="text-main underline">
            Fill out the form please{" "}
          </Link>{" "}
        </p>
      </div>
      <Input
        label="your email"
        type="text"
        error={errors?.name?.message}
        register={register("name", {
          required: "the field is requeried",
          // pattern: {
          //   message: "the pattern not matched",
          //   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          // },
        })}
      />
      <Input
        label="Your password"
        type="password"
        error={errors?.national_id?.message}
        register={register("national_id", {
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
      <ButtonForm className="w-full">Login</ButtonForm>
    </form>
  );
}

function ButtonForm() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <Button className="w-full" disabled={pending}>
      {" "}
      {pending ? "loading..." : "Login"}{" "}
    </Button>
  );
}

export default FormLogin;
