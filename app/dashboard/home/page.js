import ActivityFeed from "@/app/_components/ActivityFeed";
import Alarm from "@/app/_components/Alarm";
import Appointments from "@/app/_components/Appointments";
import Box from "@/app/_components/Box";
import DurationCart from "@/app/_components/DurationCart";
import { getUser } from "@/app/_lib/data-service";

export default async function page() {
  const user = await getUser();
  console.log(user);

  return (
    <div className="h-full   space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        Good Morning{" "}
        <span className="text-4xl font-bold">{user.full_name}</span>{" "}
      </h2>
      <div className="grid h-full gap-8 grid-rows-[17rem_1fr]">
        <div className="flex justify-between  gap-8">
          <Alarm medicalTime={new Date("2023-11-15T12:45:30")} />
          <Box label="Appointments">
            <Appointments />
          </Box>
          <Box label="Activity Feed">
            <ActivityFeed />
          </Box>
        </div>
        <DurationCart />
      </div>
    </div>
  );
}
