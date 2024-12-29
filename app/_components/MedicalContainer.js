import MedicationItem from "./MedicationItem";

function MedicalContainer() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <MedicationItem />
      <MedicationItem />
      <MedicationItem />
      <MedicationItem />
      <MedicationItem />
    </div>
  );
}

export default MedicalContainer;
