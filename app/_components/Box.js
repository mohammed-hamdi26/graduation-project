"use client";

import { motion } from "motion/react";

function Box({ children, label }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-gradient-to-r from-second-main to-second-main bg-opacity-40  p-4 rounded-lg  h-full overflow-hidden space-y-4"
    >
      <h3 className="text-xl text-white font-bold capitalize ">{label}</h3>
      {children}
    </motion.div>
  );
}

export default Box;
