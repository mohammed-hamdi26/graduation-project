import ActivityFeed from "@/app/_components/ActivityFeed";
import Alarm from "@/app/_components/Alarm";
import Appointments from "@/app/_components/Appointments";
import Box from "@/app/_components/Box";
import DoctorHome from "@/app/_components/DoctorHome";
import DurationCart from "@/app/_components/DurationCart";
import PatientHome from "@/app/_components/PatientHome";
import { getUser } from "@/app/_lib/data-service";

export default async function page() {
  const user = await getUser();

  return user?.staff ? <DoctorHome user={user} /> : <PatientHome user={user} />;
}
