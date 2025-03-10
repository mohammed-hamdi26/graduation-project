import Image from "next/image";
import { getDoctor } from "../_lib/data-service";

async function ActivityFeedItem({ activityFeed }) {
  const { message, timestamp } = activityFeed;
  const { img } = await getDoctor(activityFeed.sender);

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-12 h-12">
        <Image
          fill
          src={`${process.env.APi_URL}/${img}`}
          className="rounded-full"
          alt=""
        />
      </div>
      <div>
        <h3 className="text-white">{message}</h3>
        <p className="text-[#E5E5E5]">{timestamp}</p>
      </div>
    </div>
  );
}

export default ActivityFeedItem;
