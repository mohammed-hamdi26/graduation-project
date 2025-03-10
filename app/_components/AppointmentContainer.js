import { eachHourOfInterval, isSameHour } from "date-fns";
import AppointmentBox from "./AppointmentBox";
import { filterUnBookedAppointments } from "../_lib/helps";

function AppointmentContainer({
  availability,
  setSelectedBookTime,
  selectedBook,
  bookedAppointments,
  selectedDay,
}) {
  const startTime = Number(availability?.start_time?.split(":")[0]);

  const endTime = Number(availability?.end_time?.split(":")[0]);

  let startDate = new Date(selectedDay);
  let endDate = new Date(selectedDay);

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

  return availability ? (
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
    </div>
  ) : (
    <p className="flex text-2xl font-bold text-second-main uppercase  justify-center">
      no times
    </p>
  );
}

export default AppointmentContainer;
