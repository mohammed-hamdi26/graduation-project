"use client";
import { use, useState } from "react";
import FormRow from "./FormRow";
import UpdateFormInput from "./UpdateFormInput";
import UpadteFormInput from "./UpdateFormInput";
import { Controller, useForm } from "react-hook-form";
import { editUser } from "../_lib/actions";
import toast from "react-hot-toast";

function UpdateProfile({ user }) {
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
    console.log(updatedData);
    setDisabled(true);
    const res = await editUser(updatedData);

    setDisabled(false);
    toast.success("Data updated successfully");
  }
  return (
    <form onSubmit={handleSubmit(submit)} className="pt-4    ">
      <FormRow>
        <UpadteFormInput
          disabled={disabled}
          label={"First name"}
          value={user.first_name}
          register={register("first_name")}
        />

        <UpadteFormInput
          disabled={disabled}
          label={"Last name"}
          value={user.last_name}
          register={register("last_name")}
        />
      </FormRow>
      <FormRow>
        <UpdateFormInput
          disabled={disabled}
          label={"Phone number"}
          value={user.phone}
          register={register("phone")}
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
            Edit Data
          </button>
        ) : (
          <>
            <button
              type="submit"
              className="bg-second-main p-2 px-4 rounded-full text-white"
            >
              update data
            </button>
            <button
              onClick={() => {
                setDisabled(true);
              }}
              className="bg-gray-400 p-2 px-4 rounded-full text-white"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default UpdateProfile;
