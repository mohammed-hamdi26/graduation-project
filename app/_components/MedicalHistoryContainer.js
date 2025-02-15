import { getActivityFeeds } from "../_lib/data-service";
import MedicalHistoryItem from "./MedicalHistoryItem";

async function MedicalHistoryContainer({ docID, patientID }) {
  const medicalHistories = await getActivityFeeds(docID, patientID);
  return (
    <div className="flex flex-col items-center gap-8  h-full w-full">
      {medicalHistories.map((medicalHistory) => (
        <MedicalHistoryItem key={medicalHistory.id} info={medicalHistory} />
      ))}
    </div>
  );
}

export default MedicalHistoryContainer;
