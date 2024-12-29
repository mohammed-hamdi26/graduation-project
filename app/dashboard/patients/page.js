import PatientContainer from "@/app/_components/PatientContainer";

export default function page() {
  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">Patients</span>{" "}
      </h2>
      <PatientContainer />
    </div>
  );
}
