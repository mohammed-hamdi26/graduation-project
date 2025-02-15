import { getBookedAppointmentsForPatient } from "../_lib/data-service";
import AppointmentItem from "./AppointmentItem";

async function Appointments({ userID }) {
  const appointments = await getBookedAppointmentsForPatient(userID);

  return (
    <div
      className="space-y-4 w-80 
   h-full"
    >
      {appointments.map((appointment) => (
        <AppointmentItem key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
}

export default Appointments;
