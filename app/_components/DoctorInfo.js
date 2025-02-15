"use client";
import Image from "next/image";
import DocImage from "@/public/Rectangle 94.png";
import { motion } from "motion/react";
function DoctorInfo() {
  return (
    <div className="grid  flex-1 ">
      <motion.div
        transition={{ duration: 0.4 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative "
      >
        <Image
          src={DocImage}
          className="object-contain object-top w-full  rounded-lg"
          fill
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default DoctorInfo;
