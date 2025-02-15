import { format, isSameDay, isSameHour } from "date-fns";

export function calculateHours(currentHour, medicalHour) {
  const differenceHours = currentHour - medicalHour;
  return differenceHours < 0 ? differenceHours + 24 : differenceHours;
}

export function getDateWithOutTime(date) {
  return date.toISOString().split("T")[0];
}

export function filterUnBookedAppointments(appointments, bookedAppointments) {
  let filteredAppointments = appointments;
  if (bookedAppointments.length) {
    filteredAppointments = appointments.filter((appointment) => {
      let isBooked = false;
      for (let i = 0; i < bookedAppointments.length; i++) {
        if (
          format(appointment, "hh:mm:ss") === bookedAppointments[i].time &&
          format(appointment, "yyyy-MM-dd") === bookedAppointments[i].date
        ) {
          isBooked = true;
        }
      }
      return !isBooked;
    });
  }
  return filteredAppointments;
}
