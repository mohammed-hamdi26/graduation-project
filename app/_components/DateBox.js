"use client";

import { motion } from "motion/react";
function DateBox({
  dayOfWeak,
  day,
  backGroundColor = "bg-white",
  textColor = "text-second-main",
  onClick,
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`${backGroundColor} ${textColor} flex flex-col items-center rounded-md px-2 py-1 cursor-pointer `}
    >
      <span className="font-bold capitalize">{dayOfWeak}</span>
      <span className="font-medium">{day}</span>
    </motion.div>
  );
}

export default DateBox;
