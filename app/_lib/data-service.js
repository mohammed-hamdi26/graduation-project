import axios from "axios";
import toast from "react-hot-toast";

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
// patients
export async function getPatients() {
  try {
    const res = await axios.get(`${process.env.APi_URL}/users-list/`);

    return res.data;
  } catch (err) {
    // console.log(err.message);
    throw new Error(err.message);
  }
}

export async function getPatient(patientId) {
  try {
    const res = await axios.get(
      `${process.env.APi_URL}/users-list/${patientId}/`
    );

    return res.data;
  } catch (err) {
    // console.log(err.message);
    throw new Error(err.message);
  }
}

export async function getActivityFeeds() {
  try {
    const res = await axios.get(`${process.env.APi_URL}/activity-feed/`);

    return res.data;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}
