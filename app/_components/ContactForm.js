"use client";

import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

function ContactForm({ user }) {
  const t = useTranslations("Contact us");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  console.log(isSubmitting);
  async function submit(data) {
    console.log(data);

    const emailData = {
      from_name: data.name,
      from_email: user.email,
      to_name: "admin",
      message: data.message,
    };
    console.log(emailData);

    try {
      const res = await emailjs.send(
        "service_lveoi79",
        "template_naki6y7",
        emailData,
        "4khdsJtO7nqJgo7fR"
      );
      console.log(res);
      toast.success("Email sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send email.");
      console.error("Error sending email:", error);
      // Handle error
    }
    // Handle form submission logic here
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className=" lg:w-1/2 mx-auto flex flex-col gap-4"
    >
      <Input register={register("name")} label={t("Name")} type="text" />
      <div className="flex flex-col gap-1">
        <label className="capitalize text-[#666666]">{t("message")}</label>
        <textarea
          {...register("message")}
          className="border border-[#666666] border-opacity-40 rounded-xl px-2 py-3 on"
          label={"message"}
          type="text"
        />
      </div>
      <button
        disabled={isSubmitting}
        className="bg-second-main p-4 text-white font-bold hover:bg-second-main/90 hover:rounded-xl transition-all duration-500   text-3xl disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {t("Send")}
      </button>
    </form>
  );
}

export default ContactForm;
