import DoctorsContainer from "@/app/_components/DoctorsContainer";
import { getDoctors } from "@/app/_lib/data-service";

export default async function page() {
  const doctors = await getDoctors();
  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">Medical History</span>{" "}
      </h2>
      <DoctorsContainer
        to={"/dashboard/medical-history/details"}
        doctors={doctors}
      />
    </div>
  );
}
