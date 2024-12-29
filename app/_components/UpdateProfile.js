"use client";
import { useState } from "react";
import FormRow from "./FormRow";
import UpdateFormInput from "./UpdateFormInput";
import UpadteFormInput from "./UpdateFormInput";

function UpdateProfile() {
  const [disabled, setDisabled] = useState(true);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="pt-4    "
    >
      <FormRow>
        <UpadteFormInput
          disabled={disabled}
          label={"First name"}
          value={"mohammed"}
        />
        <UpadteFormInput
          disabled={disabled}
          label={"Last name"}
          value={"mohammed"}
        />
      </FormRow>
      <FormRow>
        <UpdateFormInput
          disabled={disabled}
          label={"email"}
          value={"mohammed@test.com"}
          type="email"
        />
        <UpdateFormInput
          disabled={disabled}
          label={"Phone number"}
          value={"01095098769"}
        />
      </FormRow>
      <div className="flex justify-end gap-3 mt-3">
        {disabled ? (
          <button
            onClick={() => {
              setDisabled(false);
            }}
            className="bg-second-main p-2 px-4 rounded-full text-white"
          >
            Edit Data
          </button>
        ) : (
          <>
            <button className="bg-second-main p-2 px-4 rounded-full text-white">
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
