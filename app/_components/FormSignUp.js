"use client";

import Input from "@/app/_components/Input";
import { motion } from "motion/react";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { usePredict } from "../_context/predictContext";
import { addUser } from "../_lib/actions";
import Button from "./Button";
import FormRow from "./FormRow";
import ImageInput from "./ImageInput";
import { useTranslations } from "next-intl";
import Spinner from "./Spinner";
import SelectedGender from "./SelectedGender";
import { Link } from "@/i18n/navigation";
import NavLogo from "./NavLogo";

function FormSignUp() {
  const t = useTranslations("form");
  const { register, handleSubmit, formState, setValue, getValues } = useForm();
  const { errors } = formState;
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const predict = usePredict();

  async function submit(data) {
    setIsSubmitting(true);
    let userData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      userData.append(key, value);
    });
    Object.entries(predict.predict).forEach(([key, value]) => {
      userData.append(key, value);
    });

    try {
      await addUser(userData);
      toast.success(t("the user is added"));
      setIsSubmitting(false);
    } catch (e) {
      setIsSubmitting(false);
      if (!e.toString().includes("Error: NEXT_REDIRECT")) {
        toast.error(t("could not add the user"));
      } else {
        toast.success(t("the user is added"));
      }
    }
  }
  return (
    <motion.form
      initial={{ translateY: "-150%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(submit)}
      className="bg-white   px-5 py-7 rounded-3xl w-full md:w-3/5 sm:w-4/5 space-y-3"
    >
      <div className="text-center space-y-2">
        <NavLogo size={"size-24"} />
        <h2 className="text-4xl font-medium">{t("complete the form")}</h2>
        <p>
          {t("Already have an account")}?{" "}
          <Link href="/login" className="text-second-main underline">
            {t("Log in")}{" "}
          </Link>{" "}
        </p>
      </div>
      <FormRow>
        <Input
          register={register("first_name", {
            required: "First name is required",
          })}
          label={t("First Name")}
          type="text"
          error={errors?.first_name?.message ?? null}
          disabled={isSubmitting}
        />
        <Input
          register={register("last_name", {
            required: "Last name is required",
          })}
          label={t("Last Name")}
          type="text"
          error={errors?.last_name?.message ?? null}
          disabled={isSubmitting}
        />
      </FormRow>
      <FormRow>
        <Input
          register={register("password", { required: "Password is required" })}
          label={t("National ID")}
          type="text"
          name={"password"}
          error={errors?.password?.message ?? null}
          disabled={isSubmitting}
        />
        <Input
          register={register("age", { required: "Age is required" })}
          label={t("age")}
          error={errors?.age?.message ?? null}
          disabled={isSubmitting}
        />
        <Input
          register={register("chronic_disease")}
          name={"chronic_disease"}
          label={t("Choronic disease")}
          disabled={isSubmitting}
        />
      </FormRow>
      <FormRow>
        <Input
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
          label={t("your email")}
          type="text"
          error={errors?.email?.message ?? null}
          disabled={isSubmitting}
        />
        <SelectedGender label={t("gender")} register={register("gender")} />
      </FormRow>
      <FormRow>
        <Input
          register={register("phone", { required: "Phone is required" })}
          label={t("phone")}
          error={errors?.phone?.message ?? null}
          disabled={isSubmitting}
        />
        {image && (
          <div className=" relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              className="object-cover"
              fill
              src={image}
              alt=""
              quality={100}
            />
          </div>
        )}
        <ImageInput
          register={register("profile_picture")}
          label={t("profile picture")}
          type="file"
          onChange={(e) => {
            const image = e.target.files[0];

            if (image) {
              setValue("profile_picture", image); // Update form state with file
              setImage(URL.createObjectURL(image)); //
            }
          }}
        />
      </FormRow>
      <div className="flex items-center justify-between">
        <Button className="w-full" disabled={isSubmitting}>
          {" "}
          {isSubmitting ? <Spinner /> : t("create account")}
        </Button>
      </div>
    </motion.form>
  );
}

export default FormSignUp;
