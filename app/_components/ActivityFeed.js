import dcImage from "@/public/mohammed.png";
import { getActivityFeeds } from "../_lib/data-service";
import ActivityFeedItem from "./ActivityFeedItem";
async function ActivityFeed({ patientID }) {
  const activityFeeds = await getActivityFeeds(null, patientID);

  return (
    <div className="space-y-5">
      {activityFeeds.map((activityFeed) => (
        <ActivityFeedItem activityFeed={activityFeed} key={activityFeed.id} />
      ))}
    </div>
  );
}

export default ActivityFeed;
