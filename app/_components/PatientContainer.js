import { getPatients } from "../_lib/data-service";
import PatientItem from "./PatientItem";

async function PatientContainer() {
  const patients = await getPatients();

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
      {patients.map((patient) => (
        <PatientItem
          key={patient.id}
          name={`${patient.first_name} ${patient.last_name}`}
          patientId={patient.user}
        />
      ))}
    </div>
  );
}

export default PatientContainer;
