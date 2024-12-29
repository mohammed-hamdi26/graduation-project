import { getActivityFeeds } from "../_lib/data-service";
import MedicalHistoryItem from "./MedicalHistoryItem";

async function MedicalHistoryContainer() {
  const medicalHistories = await getActivityFeeds();
  return (
    <div className="flex flex-col items-center gap-8">
      {medicalHistories.map((medicalHistory) => (
        <MedicalHistoryItem key={medicalHistory.id} info={medicalHistory} />
      ))}
    </div>
  );
}

export default MedicalHistoryContainer;
