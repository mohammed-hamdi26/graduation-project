import { getPatient, getUser } from "@/app/_lib/data-service";

import ModalAddPreviosHistory from "@/app/_components/ModalAddPreviosHistory";
import PatientInfo from "@/app/_components/PateintInfo";
import MedicalHistoryContainer from "@/app/_components/MedicalHistoryContainer";
export default async function page({ params }) {
  const [patient, user] = await Promise.all([
    getPatient(params.patientId),
    getUser(),
  ]);
  // const patient = await getPatient(params.patientId);
  // const user = await getUser

  return (
    <div className=" flex flex-col sm:flex-row gap-5   relative  h-full">
      <PatientInfo patient={patient} />
      {user.staff && (
        <ModalAddPreviosHistory docID={user.id} patientID={params.patientId} />
      )}
      <div className=" flex-1 space-y-4 overflow-y-scroll px-3">
        <h3 className="text-2xl font-bold text-second-main">
          last instructions
        </h3>
        <MedicalHistoryContainer docID={user.id} patientID={params.patientId} />
      </div>
    </div>
  );
}
