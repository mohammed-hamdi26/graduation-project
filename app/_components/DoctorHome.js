import AvailabilityDoctorTime from "./AvailabilityDoctorTime";
import DoctorInfo from "./DoctorInfo";

function DoctorHome({ user }) {
  return (
    <div className="h-full   space-y-8 flex flex-col">
      <h2 className="text-second-main text-3xl capitalize font-semibold">
        Good Morning{" "}
        <span className="text-4xl font-bold">
          Dr. {user.first_name} {user.last_name}
        </span>{" "}
      </h2>
      <div className="flex gap-8 flex-1 ">
        <DoctorInfo />
        <AvailabilityDoctorTime />
      </div>
    </div>
  );
}

export default DoctorHome;
