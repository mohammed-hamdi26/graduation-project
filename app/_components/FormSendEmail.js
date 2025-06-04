"use client";
import { getTranslations } from "next-intl/server";
import Button from "./Button";
import Input from "./Input";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { forgetPassword } from "../_lib/actions";
import toast from "react-hot-toast";
import { redirect } from "@/i18n/navigation";

function FormSendEmail() {
  const t = useTranslations("forget-password");
  const locale = useLocale();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  async function submit(data) {
    try {
      const res = await forgetPassword(data);

      toast.success(t("Code sent successfully"));
      redirect("/verify-code");
    } catch (e) {
      if (e.toString().includes("RangeError")) {
        toast.success(t("Code sent successfully"));
        redirect({ href: "/verify-code", locale: locale });
      } else {
        console.log(e);
        toast.error(t("Error in sending code"));
      }
    }
  }
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-8 ">
      <Input
        disabled={isSubmitting}
        label={t("Email")}
        register={register("email", { required: t("Email is required") })}
        error={errors?.email?.message}
        type="email"
      />
      <Button disabled={isSubmitting} className="w-full rounded-md">
        {t("Send")}
      </Button>
    </form>
  );
}

export default FormSendEmail;
