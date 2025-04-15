import { format } from "date-fns";
import { getAlarms } from "../_lib/data-service";
import { getNearestDrug } from "../_lib/helps";
import ActivityFeed from "./ActivityFeed";
import Alarm from "./Alarm";
import Appointments from "./Appointments";
import Box from "./Box";
import DurationCart from "./DurationCart";
import { getTranslations } from "next-intl/server";

export const revalidate = 0;

async function PatientHome({ user }) {
  const alarms = (await getAlarms(user.id)) ?? [];

  const nearestDrug = getNearestDrug(alarms);

  const t = await getTranslations("patient-home");

  return (
    <div className="h-full   space-y-8">
      <h2 className="text-second-main text-2xl font-semibold capitalize flex flex-col">
        {format(new Date(), "aaa") === "am"
          ? t("Good Morning")
          : t("Good Evening")}{" "}
        <span className="text-4xl font-bold">
          {user.first_name} {user.last_name}
        </span>{" "}
      </h2>
      <div className="grid h-full  gap-8 lg:grid-rows-[17rem_1fr]">
        <div className=" flex flex-col  sm:grid sm:grid-cols-2     lg:flex lg:justify-between lg:flex-row    gap-8">
          <Alarm medicalTime={nearestDrug} />{" "}
          <Box label={t("Appointments")}>
            <Appointments userID={user.id} />
          </Box>
          <Box className={"col-span-2"} label={t("Activity Feed")}>
            <ActivityFeed patientID={user.id} />
          </Box>
        </div>
        <DurationCart />
      </div>
    </div>
  );
}

export default PatientHome;
