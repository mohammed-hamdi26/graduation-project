"use server";

import axios from "axios";
import { redirect } from "next/navigation";

import { SignupFormSchema } from "./definitions";

import { createSession } from "./session";
import { revalidatePath } from "next/cache";
import { getUser } from "./data-service";

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
  console.log(formData);
  try {
    const res = await axios.post(
      `${process.env.APi_URL}/api/login/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    await createSession(res.data.id);
  } catch (err) {
    console.log(err.response);
    // throw new Error(err.message);
    return;
  }

  redirect("/dashboard");
}

export async function addUser(userData) {
  // Validate form fields

  console.log(userData);
  userData.append("active", true);
  userData.append("staff", false);
  userData.append("admin", false);

  console.log(userData);
  try {
    const res = await axios.post(
      `${process.env.APi_URL}/users-list/`,
      userData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res);
    const user = res.data;

    // Current steps:
    // 4. Create user session
    await createSession(user.id);
  } catch (err) {
    console.log(err.response);
    throw new Error(err.message);
  }
  redirect("/dashboard");
}

// edit user
export async function editUser(updatedData) {
  try {
    const res = await axios.put(
      `${process.env.APi_URL}/users-list/${updatedData.id}/`,
      updatedData
    );
    console.log(res);
    revalidatePath("/dashboard/profile");
  } catch (err) {
    console.error(err.response);
    // throw new Error(err.message);
  }
}

// send prevvious history

export async function sendHistory(data) {
  try {
    const res = await axios.post(`${process.env.APi_URL}/previous-history/`, {
      ...data,
    });
    console.log(res);

    revalidatePath("/dashboard/medical-history/details");
  } catch (err) {
    console.log(err);
  }
}

export async function addAvailability(data) {
  // const doctor = await getUser();
  // console.log({
  //   day: data.get("day"),
  //   start_time: `${data.get("start_time")}:00`,
  //   end_time: `${data.get("end_time")}:00`,
  //   doctor: doctor.id,
  // });
  try {
    const res = await axios.post(`${process.env.APi_URL}/doctorav-list/`, data);
    console.log(res);
  } catch (err) {
    console.log(err.response);
  }
}

export async function checkModel(data) {
  try {
    const res = await axios.post(`http://127.0.0.1:5000/predict`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    // throw new Error(err.message);
  }
}

export async function bookAppointment(data) {
  console.log(data);
  try {
    const res = await axios.post(
      `${process.env.APi_URL}/book-appointments-list/`,
      data
    );
    console.log(res);
    revalidatePath("/dashboard/doctors/3");
  } catch (err) {
    console.error(err.response);
    // throw new Error(err.message);
  }
}
