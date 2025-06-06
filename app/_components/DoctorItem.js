"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
function DoctorItem({ srcImage, doctorName, id, to }) {
  const t = useTranslations("doctors");
  const local = useLocale();
  const doctorHref = to
    ? `/${local}/${to}/${id}`
    : `/${local}/dashboard/doctors/${id}`;
  return (
    <Link href={doctorHref}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="cursor-pointer rounded-lg group relative h-80 md:h-[32rem] overflow-hidden transition duration-700  hover:scale-110"
      >
        <div>
          <Image
            quality={100}
            fill
            className="rounded-lg object-fill"
            src={srcImage}
            alt={doctorName}
          />
        </div>
        <div className="absolute -bottom-full w-full bg-second-main bg-opacity-90 text-white transition-[bottom] duration-700 text-center py-10 rounded-b-lg group-hover:bottom-0 ">
          <p className="font-medium text-lg">{t("Doctor’s Name")}</p>
          <p className="font-bold text-2xl">{doctorName}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default DoctorItem;
