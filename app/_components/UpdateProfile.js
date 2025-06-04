"use client";
import { use, useState } from "react";
import FormRow from "./FormRow";
import UpdateFormInput from "./UpdateFormInput";
import UpadteFormInput from "./UpdateFormInput";
import { Controller, useForm } from "react-hook-form";
import { editUser } from "../_lib/actions";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

function UpdateProfile({ user }) {
  const t = useTranslations("profile");
  const [disabled, setDisabled] = useState(true);

  const { handleSubmit, formState, register, control } = useForm({
    disabled,
  });

  async function submit(data) {
    const updatedData = {
      ...data,
      email: user.email,
      password: user.password,
      id: user.id,
    };

    try {
      setDisabled(true);
      const res = await editUser(updatedData);

      setDisabled(false);
      toast.success("Data updated successfully");
    } catch {
      setDisabled(false);
      toast.error("Data not updated");
    }
  }
  return (
    <form onSubmit={handleSubmit(submit)} className="pt-4    ">
      <FormRow>
        <UpadteFormInput
          disabled={disabled}
          label={t("First name")}
          value={user.staff ? user.doc_first_name : user.first_name}
          register={register(user.staff ? "doc_first_name" : "first_name")}
        />

        <UpadteFormInput
          disabled={disabled}
          label={t("Last name")}
          value={user.staff ? user.doc_last_name : user.last_name}
          register={register(user.staff ? "doc_last_name" : "last_name")}
        />
      </FormRow>
      <FormRow>
        <UpdateFormInput
          disabled={disabled}
          error={formState.errors?.phone?.message}
          label={t("Phone number")}
          value={user.phone}
          register={register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^(\+20|0)1[0-25]\d{8}$/,
              message: "Invalid phone number",
            },
          })}
        />
      </FormRow>
      <div className="flex justify-end gap-3 mt-3">
        {disabled ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setDisabled(false);
            }}
            className="bg-second-main p-2 px-4 rounded-full text-white"
          >
            {t("Edit Data")}
          </button>
        ) : (
          <>
            <button
              type="submit"
              className="bg-second-main p-2 px-4 rounded-full text-white"
            >
              {t("update data")}
            </button>
            <button
              onClick={() => {
                setDisabled(true);
              }}
              className="bg-gray-400 p-2 px-4 rounded-full text-white"
            >
              {t("Cancel")}
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default UpdateProfile;
