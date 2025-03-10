import { format } from "date-fns";
import AvailabilityDoctorTime from "./AvailabilityDoctorTime";
import DoctorInfo from "./DoctorInfo";
import Box from "./Box";
import DoctorSelectedAvailabilities from "./DoctorSelectedAvailabilities";

function DoctorHome({ user }) {
  return (
    <div className="h-fit space-y-8 flex flex-col">
      <h2 className="text-second-main text-3xl capitalize font-semibold">
        {format(new Date(), "aaa") === "am" ? "Good Morning" : "Good Evening"}{" "}
        <span className="text-4xl font-bold">
          Dr. {user.first_name} {user.last_name}
        </span>{" "}
      </h2>
      <div className="grid  grid-rows-1 grid-cols-2 gap-8 flex-1  ">
        <DoctorInfo image={`${process.env.APi_URL}${user.profile_picture}`} />
        <AvailabilityDoctorTime docID={user.id} />
        {/* <DoctorSelectedAvailabilities /> */}
      </div>
    </div>
  );
}

export default DoctorHome;
