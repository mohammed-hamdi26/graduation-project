import DoctorHome from "@/app/_components/DoctorHome";
import PatientHome from "@/app/_components/PatientHome";
import { getUser } from "@/app/_lib/data-service";

export const revalidate = 0;

export default async function page() {
  const user = await getUser();

  return user?.staff ? <DoctorHome user={user} /> : <PatientHome user={user} />;
}
