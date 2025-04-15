import { getDoctor } from "../_lib/data-service";
import DateBox from "./DateBox";

async function AppointmentItem({ appointment }) {
  const bookedDate = new Date(appointment.date);
  const day = bookedDate.getDate();
  const dayOfWeak = bookedDate.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const doctor = await getDoctor(appointment.doctor);
  return (
    <div className="flex gap-3">
      <DateBox dayOfWeak={dayOfWeak} day={day} />
      <div>
        <p className="text-white">
          Dr. {doctor.doc_first_name} {doctor.doc_last_name}
        </p>
        <p className="text-[#E5E5E5]">{appointment.time}</p>
      </div>
    </div>
  );
}

export default AppointmentItem;
