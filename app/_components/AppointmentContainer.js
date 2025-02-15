import { eachHourOfInterval, isSameHour } from "date-fns";
import AppointmentBox from "./AppointmentBox";
import { filterUnBookedAppointments } from "../_lib/helps";

function AppointmentContainer({
  availability,
  setSelectedBookTime,
  selectedBook,
  bookedAppointments,
}) {
  const startTime = Number(availability?.start_time?.split(":")[0]);

  const endTime = Number(availability?.end_time?.split(":")[0]);

  let startDate = new Date();
  let endDate = new Date();

  startDate.setHours(startTime);
  endDate.setHours(endTime);

  const theAppointments = eachHourOfInterval({
    start: startDate,
    end: endDate,
  });

  const filteredAppointments = filterUnBookedAppointments(
    theAppointments,
    bookedAppointments
  );

  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      {filteredAppointments.map((appointment) => (
        <AppointmentBox
          key={appointment}
          appointment={appointment}
          onSelect={() => {
            setSelectedBookTime(appointment);
          }}
          isSelected={isSameHour(appointment, selectedBook)}
        />
      ))}
      {/* <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox>
      <AppointmentBox>12:00 am</AppointmentBox> */}
    </div>
  );
}

export default AppointmentContainer;
