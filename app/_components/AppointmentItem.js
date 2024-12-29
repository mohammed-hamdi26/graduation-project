import DateBox from "./DateBox";

function AppointmentItem({
  day,
  dayOfWeak,
  nameDoctor,
  startAppointment,
  endAppointment,
}) {
  return (
    <div className="flex gap-3">
      <DateBox dayOfWeak={dayOfWeak} day={day} />
      <div>
        <p className="text-white">{nameDoctor}</p>
        <p className="text-[#E5E5E5]">9:00 am - 11:30 am</p>
      </div>
    </div>
  );
}

export default AppointmentItem;
