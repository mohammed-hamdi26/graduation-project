"use client";
import { motion } from "motion/react";
import Image from "next/image";

function ResultModal({ typeCancer, confidenceScore, image }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className=" p-4 rounded-lg w-[650px] space-y-6"
    >
      <h2 className="text-4xl text-second-main uppercase font-semibold text-center">
        the result
      </h2>
      <div className="relative w-full  max-w-[450px] h-[300px] mx-auto">
        <Image
          fill
          alt=""
          className="object-cover rounded-lg"
          src={URL.createObjectURL(image)}
        />
      </div>
      <div className="flex justify-between text-xl text-white gap-4">
        <p className="bg-second-main bg-opacity-50 p-2 rounded-md">
          type of {typeCancer}{" "}
        </p>
        <p className="bg-second-main bg-opacity-50 p-2 rounded-md">
          Confidence Score : {confidenceScore}
        </p>
      </div>
    </motion.div>
  );
}

export default ResultModal;
