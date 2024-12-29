import MedicalHistoryContainer from "@/app/_components/MedicalHistoryContainer";

export default function page() {
  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">Medical History</span>{" "}
      </h2>
      <MedicalHistoryContainer />
    </div>
  );
}
