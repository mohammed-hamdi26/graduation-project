import { TZDate } from "@date-fns/tz";
import { differenceInHours, format, set } from "date-fns";

TZDate.tz("Africa/Cairo");
export function calculateHours(currentHour, medicalHour) {
  const differenceHours = currentHour - medicalHour;
  return differenceHours < 0 ? differenceHours + 24 : differenceHours;
}

export function getDateWithOutTime(date) {
  // return date.toISOString().split("T")[0];
  return format(date, "yyyy-MM-dd");
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

export function getNearestDrug(drugs) {
  const drugsDates = drugs.map((drug) => {
    const timeString = drug.alarm_time.split(":"); // Desired time

    const updatedDate = set(new TZDate().toString(), {
      hours: Number(timeString[0]) + 2,
      minutes: timeString[1],
      seconds: timeString[2],
    });
    // console.log(updatedDate);
    // console.log(new TZDate().toString());

    return updatedDate;
  });

  let nearestDate;
  let maxDifference = -Infinity;
  drugsDates.forEach((date) => {
    if (differenceInHours(new Date(), date) > maxDifference) {
      maxDifference = differenceInHours(new Date(), date);
      nearestDate = date;
    }
  });

  return nearestDate;
}

export function getTypeCancer(cancer) {
  if (cancer === "Colon adenocarcinoma") return "Colon Cancer";
  if (
    cancer === "Malignant_early Pre-B" ||
    cancer === "Malignant_Pro-B" ||
    cancer === "Malignant_early"
  )
    return "Leukemia Cancer";
  if (
    cancer === "Lung adenocarcinoma" ||
    cancer === "Lung squamous cell carcinoma"
  )
    return "Lung Cancer";
  if (cancer === "Malignant") return "Skin Cancer";
}
