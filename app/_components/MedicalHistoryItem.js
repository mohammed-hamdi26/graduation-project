"use client";
import { format, isSameDay, isToday } from "date-fns";
import { motion } from "motion/react";
function MedicalHistoryItem({ info }) {
  // console.log(info);

  const date = isToday(info.updated)
    ? "Today"
    : format(info.updated, "EEEE dd LLL");
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-second-main p-4 rounded-lg text-white cursor-pointer w-1/2"
    >
      <h3 className="text-2xl text-white font-bold">{date}</h3>
      <p className="text-xl ">{info.msg}</p>
    </motion.div>
  );
}

export default MedicalHistoryItem;
