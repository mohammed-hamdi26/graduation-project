import DoctorInfo from "@/app/_components/DoctorInfo";

export default function page() {
  return (
    <div className="h-full   space-y-8 flex flex-col">
      <h2 className="text-second-main text-3xl capitalize font-semibold">
        Good Morning{" "}
        <span className="text-4xl font-bold">Dr. mohammed hamdi</span>{" "}
      </h2>
      <DoctorInfo />
    </div>
  );
}
