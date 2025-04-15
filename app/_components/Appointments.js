import Image from "next/image";
import { getBookedAppointmentsForPatient } from "../_lib/data-service";
import AppointmentItem from "./AppointmentItem";
import notFoundImage from "@/public/Filesearching-cuate.png";
import { getTranslations } from "next-intl/server";
async function Appointments({ userID }) {
  const t = await getTranslations("patient-home");
  const appointments = await getBookedAppointmentsForPatient(userID);

  if (!appointments.length)
    return (
      <div className="flex flex-col  items-center h-full w-full">
        <Image src={notFoundImage} alt="no data" width={150} height={150} />
        <p className="text-2xl font-bold text-white">{t("No Appointments")}</p>
      </div>
    );
  return (
    <div
      className="space-y-4 w-80
   h-full"
    >
      {appointments
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3)
        .map((appointment) => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))}
    </div>
  );
}

export default Appointments;
