"use server";

import axios from "axios";
import { redirect } from "next/navigation";

import { SignupFormSchema } from "./definitions";
import toast from "react-hot-toast";
import { createSession } from "./session";

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
    full_name: `${formData.get("first_name")} ${formData.get("last_name")}`,
    email: formData.get("email"),
    password: formData.get("password"),
    age: Number(formData.get("age")),
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await axios.post(`${process.env.APi_URL}/users-list/`, {
      ...validatedFields.data,
      active: true,
      staff: false,
      admin: false,
    });

    const user = res.data;

    // Current steps:
    // 4. Create user session
    await createSession(user.id);
  } catch (err) {
    console.log(err.response);
    return;
  }
  redirect("/dashboard");
}
