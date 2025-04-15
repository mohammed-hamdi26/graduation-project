import { format } from "date-fns";
import AvailabilityDoctorTime from "./AvailabilityDoctorTime";
import DoctorInfo from "./DoctorInfo";
import Box from "./Box";
import DoctorSelectedAvailabilities from "./DoctorSelectedAvailabilities";
import { getTranslations } from "next-intl/server";

async function DoctorHome({ user }) {
  const t = await getTranslations("doctor-home");
  return (
    <div className="h-fit space-y-8 flex flex-col">
      <h2 className="text-second-main text-3xl capitalize font-semibold">
        {format(new Date(), "aaa") === "am"
          ? t("Good Morning")
          : t("Good Evening")}{" "}
        <span className="text-4xl font-bold block">
          Dr. {user.first_name} {user.last_name}
        </span>{" "}
      </h2>
      <div className="grid  grid-cols-1 sm:grid-rows-1 lg:grid-cols-2 gap-8 flex-1  ">
        <DoctorInfo
          image={
            user.profile_picture
              ? `${process.env.APi_URL}${user.profile_picture}`
              : ""
          }
        />
        <AvailabilityDoctorTime docID={user.id} />
        <DoctorSelectedAvailabilities docID={user.id} />
      </div>
    </div>
  );
}

export default DoctorHome;
