import ActivityFeed from "./ActivityFeed";
import Alarm from "./Alarm";
import Appointments from "./Appointments";
import Box from "./Box";
import DurationCart from "./DurationCart";

function PatientHome({ user }) {
  return (
    <div className="h-full   space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        Good Morning{" "}
        <span className="text-4xl font-bold">
          {user.first_name} {user.last_name}
        </span>{" "}
      </h2>
      <div className="grid h-full gap-8 grid-rows-[17rem_1fr]">
        <div className="flex justify-between  gap-8">
          <Alarm medicalTime={new Date("2023-11-15T12:45:30")} />
          <Box label="Appointments">
            <Appointments userID={user.id} />
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

export default PatientHome;
