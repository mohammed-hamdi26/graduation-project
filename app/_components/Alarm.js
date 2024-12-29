"use client";
import { motion } from "motion/react";
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { useEffect, useState } from "react";

function Alarm({ medicalTime }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const hours =
    differenceInHours(medicalTime, currentDate) % 24 < 0
      ? (differenceInHours(medicalTime, currentDate) % 24) + 24
      : differenceInHours(medicalTime, currentDate) % 24;
  const minutes =
    differenceInMinutes(medicalTime, currentDate) % 60 < 0
      ? (differenceInMinutes(medicalTime, currentDate) % 60) + 60
      : differenceInMinutes(medicalTime, currentDate) % 60;
  const seconds =
    differenceInSeconds(medicalTime, currentDate) % 60 < 0
      ? (differenceInSeconds(medicalTime, currentDate) % 60) + 60
      : differenceInSeconds(medicalTime, currentDate) % 60;

  useEffect(() => {
    const counter = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  }, []);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="font-bold flex flex-col justify-center"
    >
      <p className="text-2xl ">Alarm For :</p>
      <p className="text-6xl">Panadol</p>
      <div className="flex gap-2">
        <p className="text-6xl flex items-center flex-col">
          {hours <= 9 ? `0${hours}` : hours}
          <span className="text-xl">Hours</span>
        </p>
        <p className="text-6xl">:</p>
        <p className="text-6xl flex items-center flex-col">
          {minutes <= 9 ? `0${minutes}` : minutes}
          <span className="text-xl">minutes</span>
        </p>
        <p className="text-6xl">:</p>
        <p className="text-6xl flex items-center flex-col">
          {seconds <= 9 ? `0${seconds}` : seconds}
          <span className="text-xl">seconds</span>
        </p>
      </div>
    </motion.div>
  );
}

export default Alarm;
