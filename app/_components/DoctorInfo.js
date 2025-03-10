"use client";
import Image from "next/image";
import DocImage from "@/public/Rectangle 94.png";
import { motion } from "motion/react";
function DoctorInfo({ image }) {
  return (
    <div className="grid row-span-2 h-96 w-96 rounded-full overflow-hidden    ">
      <motion.div
        transition={{ duration: 0.4 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative "
      >
        <Image
          src={image}
          className="object-cover object-top w-full  rounded-lg"
          fill
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default DoctorInfo;
