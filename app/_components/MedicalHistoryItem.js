"use client";
import { format, isSameDay, isToday } from "date-fns";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { IoDocumentTextOutline } from "react-icons/io5";
function MedicalHistoryItem({ info }) {
  const t = useTranslations("Medical History");
  const date = isToday(info.updated_at)
    ? t("Today")
    : format(info.updated_at, "EEEE dd LLL");
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-second-main p-4 rounded-lg text-white cursor-pointer w-full flex items-center gap-3"
    >
      <IoDocumentTextOutline className="text-3xl" />
      <div>
        <h3 className="text-2xl text-white font-bold">{date}</h3>
        <p className="text-xl ">{info.message}</p>
      </div>
    </motion.div>
  );
}

export default MedicalHistoryItem;
