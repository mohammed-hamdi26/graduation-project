import { getPatient, getUser } from "@/app/_lib/data-service";

import ModalAddPreviosHistory from "@/app/_components/ModalAddPreviosHistory";
import PatientInfo from "@/app/_components/PateintInfo";
import MedicalHistoryContainer from "@/app/_components/MedicalHistoryContainer";
import { getTranslations } from "next-intl/server";
export default async function page({ params }) {
  const param = await params;
  const [patient, user, t] = await Promise.all([
    getPatient(param.patientId),
    getUser(),
    getTranslations("Patients"),
  ]);
  // const patient = await getPatient(params.patientId);
  // const user = await getUser

  return (
    <div className=" flex flex-col sm:flex-row gap-5   relative  h-full">
      <PatientInfo patient={patient} />
      {user.staff && (
        <ModalAddPreviosHistory docID={user.id} patientID={param.patientId} />
      )}
      <div className=" flex-1 space-y-4 overflow-y-scroll px-3">
        <h3 className="text-2xl font-bold text-second-main">
          {t("last instructions")}
        </h3>
        <MedicalHistoryContainer docID={user.id} patientID={param.patientId} />
      </div>
    </div>
  );
}
