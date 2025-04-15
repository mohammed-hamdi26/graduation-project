import { getAlarms, getUser } from "../_lib/data-service";
import MedicationItem from "./MedicationItem";

async function MedicalContainer() {
  const user = await getUser();
  console.log(user);
  const medications = await getAlarms(user.id);
  console.log(medications);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {medications?.map((medication) => (
        <MedicationItem key={medication.id} medication={medication} />
      ))}
    </div>
  );
}

export default MedicalContainer;
