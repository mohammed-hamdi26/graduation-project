import { getAlarms, getUser } from "../_lib/data-service";
import MedicationItem from "./MedicationItem";

async function MedicalContainer() {
  const user = await getUser();
  const medications = await getAlarms(user.id);
  console.log(medications);

  return (
    <div className="grid grid-cols-3 gap-6">
      {medications.map((medication) => (
        <MedicationItem key={medication.id} medication={medication} />
      ))}
    </div>
  );
}

export default MedicalContainer;
