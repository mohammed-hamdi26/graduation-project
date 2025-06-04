"use client";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import { resetPassword } from "../_lib/actions";

import toast from "react-hot-toast";
import { redirect } from "@/i18n/navigation";

function FormSetPassword() {
  const locale = useLocale();
  const t = useTranslations("set-password");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const submit = async (data) => {
    try {
      const res = await resetPassword(data);
      toast.success(t("Password set successfully"));
      reset();
      redirect({ href: "/login", locale: locale });
    } catch (e) {
      if (e.toString().includes("RangeError")) {
        toast.success(t("Password set successfully"));
        reset();
        redirect({ href: "/login", locale: locale });
      } else {
        console.log(e);
        toast.error(t("Password not set"));
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-8 ">
      <Input
        disabled={isSubmitting}
        label={t("Create Password")}
        register={register("new_pass", { required: "Password is required" })}
        type="password"
      />
      <Input
        disabled={isSubmitting}
        label={t("Re-enter Password")}
        register={register("confirm_pass", {
          required: "Password is required",
          validate: (value) => value === getValues("new_pass"),
          message: "Passwords do not match",
        })}
        type="password"
      />
      <Button disabled={isSubmitting} className="w-full rounded-md">
        {t("Set password")}
      </Button>
    </form>
  );
}

export default FormSetPassword;
