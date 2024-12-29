"use client";

import Input from "@/app/_components/Input";
import FormRow from "./FormRow";
import Link from "next/link";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { addUser } from "../_lib/actions";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { useActionState } from "react";

function FormSignUp() {
  const [state, action, pending] = useActionState(addUser, undefined);
  console.log(state);
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
          label="First Name"
          type="text"
          error={state?.errors?.first_name[0]}
        />
        <Input
          label="Last Name"
          type="text"
          error={state?.errors?.last_name[0]}
        />
      </FormRow>
      <FormRow>
        <Input
          label="your email"
          type="email"
          // register={register("email", {
          //   required: "the field is requeried",
          //   pattern: {
          //     message: "the pattern not matched",
          //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          //   },
          // })}
          error={state.errors?.email?.message}
        />
        <Input
          label="National ID"
          type="text"
          // register={register("password", {
          //   required: "the field is requeried",
          //   pattern: {
          //     message: "the pattern not matched",
          //     value: /^\d{14}$/,
          //   },
          // })}
          // error={state.errors?.password?.message}
        />
      </FormRow>
      <FormRow>
        <Input
          label="age"
          // register={register("age", {
          //   required: "the field is requeried",
          //   pattern: {
          //     message: "the pattern not matched",
          //     value: /^(?:[1-9]?[0-9]|1[0-4][0-9]|150)$/,
          //   },
          // })}
          // error={state.errors?.age?.message}
        />
        <Input
          label="Choronic disease"
          // register={register("chronic_disease")}
        />
      </FormRow>
      <Input
        label="phone"
        // register={register("phone", {
        //   required: "the field is requeried",
        //   pattern: {
        //     message: "the pattern not matched",
        //     value: /^\d{11}$/,
        //   },
        // })}
        // error={state.errors?.phone?.message}
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
