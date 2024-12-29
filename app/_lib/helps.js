export function calculateHours(currentHour, medicalHour) {
  console.log(currentHour, medicalHour);
  const differenceHours = currentHour - medicalHour;
  return differenceHours < 0 ? differenceHours + 24 : differenceHours;
}

export function getDateWithOutTime(date) {
  return date.toISOString().split("T")[0];
}
