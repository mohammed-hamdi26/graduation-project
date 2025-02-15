import Image from "next/image";
import backGroundImage from "@/public/freepik__medicines-background__19464.jpeg";
import { MdOutlineWatchLater } from "react-icons/md";
import { format } from "date-fns";

function MedicationItem({ medication }) {
  const date = new Date(`2025 2 ,${medication.alarm_time}`);
  // date.setTime(medication.alarm_time);
  console.log(date);
  return (
    <div className="relative h-44 flex items-end p-4 rounded-md overflow-hidden">
      <MdOutlineWatchLater className="absolute top-1 left-1 z-30 text-white w-10 h-10" />
      <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 z-20"></div>
      <Image src={backGroundImage} fill className="object-cover z-0" alt="" />
      <div className="flex justify-between flex-1 z-30 text-white text-3xl font-bold">
        <p>{medication.pill_name}</p>
        <p>{format(date, "p")}</p>
      </div>
    </div>
  );
}

export default MedicationItem;
