"use client";
import { redirect } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { verifyPassword } from "../_lib/actions";
import Button from "./Button";
import Input from "./Input";

function FormVerifyCode() {
  const locale = useLocale();
  const t = useTranslations("verify-code");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function submit(data) {
    try {
      const res = await verifyPassword(data);
      toast.success(t("Code is correct"));
      redirect({ href: "/set-password", locale: locale });
    } catch (e) {
      if (e.toString().includes("RangeError")) {
        toast.success(t("Code is correct"));
        redirect({ href: "/set-password", locale: locale });
      } else {
        console.log(e);
        toast.error(t("Code is incorrect"));
      }
    }
  }
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-8 ">
      <Input
        label={t("code")}
        register={register("code", {
          required: t("code is required"),
          pattern: { value: /^[0-9]{6}$/, message: t("code must be 6 digits") },
        })}
        error={errors?.code?.message}
        type="password"
      />
      <Button className="w-full rounded-md">{t("Send")}</Button>
    </form>
  );
}

export default FormVerifyCode;
