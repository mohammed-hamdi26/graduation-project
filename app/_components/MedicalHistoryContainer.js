import Image from "next/image";
import { getActivityFeeds } from "../_lib/data-service";
import MedicalHistoryItem from "./MedicalHistoryItem";
import notFoundImage from "@/public/Filesearching-cuate.png";
import { getTranslations } from "next-intl/server";

async function MedicalHistoryContainer({ docID, patientID }) {
  const medicalHistories = await getActivityFeeds(docID, patientID);
  const t = await getTranslations("Medical History");
  // const medicalHistories = [];
  if (medicalHistories.length === 0)
    return (
      <div className="flex flex-col  items-center h-full w-full">
        <Image src={notFoundImage} alt="no data" width={450} height={450} />
        <p className="text-5xl font-bold text-second-main">
          {t("No Medical History")}
        </p>
      </div>
    );
  return (
    <>
      <div className="flex flex-col items-center gap-8  h-full w-full">
        {medicalHistories.map((medicalHistory) => (
          <MedicalHistoryItem key={medicalHistory.id} info={medicalHistory} />
        ))}
      </div>
    </>
  );
}

export default MedicalHistoryContainer;
