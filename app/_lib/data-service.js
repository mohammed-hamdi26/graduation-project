import axios from "axios";
import { cookies } from "next/headers";

import { decrypt } from "./session";
import { revalidatePath } from "next/cache";

// user
export async function getUser() {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  const id = session?.userId;

  try {
    const res = await axios.get(`${process.env.APi_URL}/users-list/${id}/`);

    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
// doctors
export async function getDoctors() {
  try {
    const res = await axios.get(`${process.env.APi_URL}/doctors-list/`);

    return res.data;
  } catch (err) {
    // console.log(err.message);
    throw new Error(err.message);
  }
}
export async function getDoctor(doctorId) {
  try {
    const res = await axios.get(
      `${process.env.APi_URL}/doctors-list/${doctorId}/`
    );

    return res.data;
  } catch (err) {
    // console.log(err.message);
    throw new Error(err.message);
  }
}

export async function getDoctorAvailability(id, day) {
  try {
    const res = await axios.get(`${process.env.APi_URL}/doctorav-list/${id}/`);
    let filterDay;
    if (day) {
      res.data.forEach((availability) => {
        if (day === availability.date) {
          filterDay = availability;
        }
      });
      return filterDay ? filterDay : null;
    }
    return res.data;
  } catch (err) {
    // console.log(err);
    throw new Error(err);
  }
}
// patients
export async function getPatients() {
  try {
    const res = await axios.get(`${process.env.APi_URL}/patients-list/`);

    return res.data;
  } catch (err) {
    // console.log(err.message);
    throw new Error(err.message);
  }
}

export async function getPatient(patientId) {
  try {
    const res = await axios.get(
      `${process.env.APi_URL}/patients-list/${patientId}/`
    );

    return res.data;
  } catch (err) {
    // console.log(err.message);
    throw new Error(err.message);
  }
}

export async function getActivityFeeds(docID, patientID) {
  try {
    const res = await axios.get(`${process.env.APi_URL}/previous-history/`);
    let filteredActivities = res.data;
    if (docID && patientID) {
      filteredActivities = res.data.filter(
        (activity) =>
          activity.sender === docID && activity.reciever == patientID
      );
    } else if (patientID) {
      filteredActivities = res.data.filter(
        (activity) => activity.reciever === patientID
      );
    }

    return filteredActivities;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}

export async function getBookedAppointmentsForDoctor(docID) {
  try {
    const res = await axios.get(
      `${process.env.APi_URL}/book-appointments-list/${docID}/`
    );
    let filteredAppointments = res.data;
    // if (docID) {
    //   filteredAppointments = res.data.filter(
    //     (appointment) => appointment.doctor === docID
    //   );
    // }

    return typeof filteredAppointments === "object" ? filteredAppointments : [];
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}
export async function getBookedAppointmentsForPatient(patientID) {
  try {
    const res = await axios.get(
      `${process.env.APi_URL}/book-appointments-list/`
    );
    let filteredAppointments = res.data;
    if (patientID) {
      filteredAppointments = res.data.filter(
        (appointment) => appointment.patient === patientID
      );
    }

    return filteredAppointments;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}

export async function getAlarms(id) {
  try {
    const res = await axios.get(`${process.env.APi_URL}/alarm/`);
    let filteredAlarms = res.data;
    if (id) {
      filteredAlarms = res.data.filter((alarm) => alarm.user === id);
    }

    return res.data;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}
