"use client";

import Input from "@/app/_components/Input";
import FormRow from "./FormRow";
import Link from "next/link";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { addUser } from "../_lib/actions";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { useActionState, useState } from "react";

function FormSignUp() {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });
  const [state, action, pending] = useActionState(addUser, undefined);

  function handleChange(e) {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  // const { register, handleSubmit, formState } = useForm();
  // const { errors } = formState;

  // async function submit(data) {
  //   // try {
  //   //   await addUser(data);
  //   //   toast.success("the user is added");
  //   // } catch (e) {
  //   //   console.log(e);
  //   //   toast.error("cant add user");
  //   // }
  // }
  return (
    <form
      action={action}
      // onSubmit={handleSubmit(submit)}
      className="bg-white  px-9 py-12 rounded-3xl w-full md:w-2/5 space-y-6"
    >
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-medium">complete the form</h2>
        <p>
          Already have an ccount?{" "}
          <Link href="/login" className="text-main underline">
            Log in{" "}
          </Link>{" "}
        </p>
      </div>
      <FormRow>
        <Input
          value={formValues.first_name}
          onChange={handleChange}
          label="First Name"
          type="text"
          name={"first_name"}
          error={state?.errors?.first_name ?? null}
          disabled={pending}
        />
        <Input
          value={formValues.last_name}
          onChange={handleChange}
          label="Last Name"
          type="text"
          name={"last_name"}
          error={state?.errors?.last_name ?? null}
          disabled={pending}
        />
      </FormRow>
      <FormRow>
        <Input
          value={formValues.email}
          onChange={handleChange}
          label="your email"
          type="email"
          name={"email"}
          error={state?.errors?.email ?? null}
          disabled={pending}
        />
        <Input
          value={formValues.password}
          onChange={handleChange}
          label="National ID"
          type="text"
          name={"password"}
          error={state?.errors?.password ?? null}
          disabled={pending}
        />
      </FormRow>
      <FormRow>
        <Input
          value={formValues.age}
          onChange={handleChange}
          name={"age"}
          label="age"
          error={state?.errors?.age ?? null}
          disabled={pending}
        />
        <Input
          name={"chronic_disease"}
          label="Choronic disease"
          disabled={pending}
        />
      </FormRow>
      <Input
        value={formValues.phone}
        onChange={handleChange}
        label="phone"
        name={"phone"}
        error={state?.errors?.phone ?? null}
        disabled={pending}
      />
      <div className="flex items-center justify-between">
        <Link href="/login" className="underline text-lg ">
          log in instead
        </Link>
        <Button>create account</Button>
      </div>
    </form>
  );
}

export default FormSignUp;
