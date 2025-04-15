import Image from "next/image";
import { getActivityFeeds } from "../_lib/data-service";
import ActivityFeedItem from "./ActivityFeedItem";

import notFoundImage from "@/public/Filesearching-cuate.png";
import { getTranslations } from "next-intl/server";

async function ActivityFeed({ patientID }) {
  const t = await getTranslations("patient-home");
  const activityFeeds = await getActivityFeeds(null, patientID);

  if (activityFeeds.length === 0)
    return (
      <div className="flex flex-col  items-center h-full w-full">
        <Image src={notFoundImage} alt="no data" width={150} height={150} />
        <p className="text-2xl font-bold text-white">
          {t("No Medical History")}{" "}
        </p>
      </div>
    );
  return (
    <div className="space-y-5">
      {activityFeeds.map((activityFeed) => (
        <ActivityFeedItem activityFeed={activityFeed} key={activityFeed.id} />
      ))}
    </div>
  );
}

export default ActivityFeed;
