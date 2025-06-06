"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { redirect as redirectIntl } from "@/i18n/navigation";

import { revalidatePath } from "next/cache";
import { getUser } from "./data-service";
import { createSession } from "./session";

import { deleteSession } from "@/app/_lib/session";
import { getLocale } from "next-intl/server";
import { cookies } from "next/headers";

export async function uploadPhoto(data) {
  console.log(data);
  try {
    const res = await axios.post(
      `${process.env.APi_URL}/photo-uploader/`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res);
  } catch (err) {
    console.log(err.response);
    throw new Error(err.message);
  }
}

// authentication

export async function login(formData) {
  const local = await getLocale();
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
    throw new Error(err.message);
  }
  redirect(`/${local}/dashboard/home`);
}

export async function addUser(userData) {
  // Validate form fields

  userData.append("active", true);
  userData.append("staff", false);
  userData.append("admin", false);

  const local = await getLocale();
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

    const user = res.data;

    // Current steps:
    // 4. Create user session
    await createSession(user.id);
  } catch (err) {
    console.log(err.response);
    throw new Error(err.message);
  }
  redirect(`/${local}/dashboard`);
}

// edit user
export async function editUser(updatedData) {
  try {
    const local = await getLocale();

    const res = await axios.put(
      `${process.env.APi_URL}/users-list/${updatedData.id}/`,
      updatedData
    );
    console.log(res);
    revalidatePath(`/${local}/dashboard/profile`);
  } catch (err) {
    console.error(err.response);
    throw new Error(err);
  }
}
export async function editUserPhoto(data) {
  const user = await getUser();

  try {
    const local = await getLocale();

    const res = await axios.put(
      `${process.env.APi_URL}/users-list/${user.id}/`,
      data
    );
    console.log(res);
    revalidatePath(`/${local}/dashboard/profile`);
  } catch (err) {
    console.error(err.response);
    // throw new Error(err.message);
  }
}

// send prevvious history

export async function sendHistory(data) {
  console.log(data);
  try {
    const local = await getLocale();
    const res = await axios.post(`${process.env.APi_URL}/previous-history/`, {
      ...data,
    });
    console.log(res);

    revalidatePath(`/${local}/dashboard/medical-history/details`);
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
  console.log(data);
  try {
    const local = await getLocale();

    const res = await axios.post(
      `${process.env.APi_URL}/doctorav-list/`,

      data
    );
    revalidatePath(`/${local}/dashboard/home`);
  } catch (err) {
    console.log(err.message);
  }
}

export async function checkModel(data) {
  console.log(data);
  try {
    const res = await axios.post(`http://127.0.0.1:5000/predict`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    console.log(err.response);
    throw new Error(err.message);
  }
}

export async function bookAppointment(data) {
  console.log(data);
  try {
    const local = await getLocale();
    const res = await axios.post(
      `${process.env.APi_URL}/book-appointments-list/`,
      data
    );
    console.log(res);
    revalidatePath(`/${local}/dashboard/doctors/${data?.doctor}`);
  } catch (err) {
    console.error(err.response);
    // throw new Error(err.message);
  }
}

// medications

export async function addMedication(data) {
  const user = await getUser();
  try {
    const local = await getLocale();
    const res = await axios.post(`${process.env.APi_URL}/alarm/`, {
      ...data,
      user: user.id,
    });
    console.log(res);
    revalidatePath(`/${local}/dashboard/medication-reminder`);
  } catch (err) {
    console.log(err);
  }
}

export async function logout() {
  const local = await getLocale();

  deleteSession();
  redirect(`/${local}/login`);
}

export async function forgetPassword(data) {
  try {
    const res = await axios.post(
      `${process.env.APi_URL}/forgot-password/`,
      data
    );

    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function verifyPassword(data) {
  try {
    const res = await axios.post(
      `${process.env.APi_URL}/verify-reset-code/`,
      data
    );

    (await cookies()).set("token", res.data.token);
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function resetPassword(data) {
  try {
    const token = (await cookies()).get("token");

    const res = await axios.post(
      `${process.env.APi_URL}/reset-password/`,
      data,
      {
        headers: {
          Authorization: `Token ${token.value}`,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err.response);
    throw new Error(err.message);
  }
}
