"use client";
import { motion } from "motion/react";

function Button({ children, onClick, className = "", disabled }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-second-main px-4 py-3 rounded-full text-lg font-bold text-white  uppercase disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-500 ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
