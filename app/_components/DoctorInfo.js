"use client";
import Image from "next/image";
import DocImage from "@/public/mohammed2.png";
import { motion } from "motion/react";
function DoctorInfo() {
  return (
    <div className="grid grid-cols-3 flex-1 ">
      <motion.div
        transition={{ duration: 0.4 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative"
      >
        <Image
          src={DocImage}
          className="object-cover  rounded-lg"
          fill
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default DoctorInfo;
