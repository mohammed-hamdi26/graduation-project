"use server";

import axios from "axios";
import { redirect } from "next/navigation";

import { SignupFormSchema } from "./definitions";

export async function uploadPhoto(data) {
  try {
    const res = await axios.post(`${process.env.APi_URL}/photo-upload/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
    // throw new Error(err.message);
  }
}

// authentication

export async function login(formData) {
  try {
    const res = await axios.post(`${process.env.APi_URL}/login/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    console.log(err.response);
    // throw new Error(err.message);
  }
}

export async function addUser(state, formData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    password: formData.get("password"),
    age: formData.get("age"),
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    // const errorMessage = validatedFields.error.flatten().fieldErrors;

    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // console.log({ ...data, active: true, staff: false, admin: false });
  // try {
  //   const res = await axios.post(`${process.env.APi_URL}/users-list/`, {
  //     ...data,
  //     active: true,
  //     staff: false,
  //     admin: false,
  //   });

  //   return res;
  // } catch (e) {
  //   console.log(e.message);
  // }
}
