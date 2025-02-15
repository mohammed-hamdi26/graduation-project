import MedicalHistoryContainer from "@/app/_components/MedicalHistoryContainer";
import ModalAddPreviosHistory from "@/app/_components/ModalAddPreviosHistory";
import { getUser } from "@/app/_lib/data-service";

export default async function page({ params }) {
  const user = await getUser();
  const { doctorId } = await params;

  return (
    <div className="space-y-8 relative flex-1 h-full">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">Medical History</span>{" "}
      </h2>
      <MedicalHistoryContainer docID={Number(doctorId)} patientID={user.id} />
    </div>
  );
}
