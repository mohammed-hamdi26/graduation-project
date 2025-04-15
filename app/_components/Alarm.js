"use client";
import { motion } from "motion/react";
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  set,
} from "date-fns";
import { useEffect, useRef, useState } from "react";
import { TZDate } from "@date-fns/tz";
import useSound from "use-sound";
import { useTranslations } from "next-intl";

TZDate.tz("Africa/Cairo");
function Alarm({ medicalTime, className }) {
  const t = useTranslations("patient-home");
  if (!medicalTime)
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`font-bold flex flex-col justify-center text-second-main ${className}`}
      >
        <p className="text-7xl">{t("No Alarms")}</p>
      </motion.div>
    );

  const date = new TZDate();

  const [currentDate, setCurrentDate] = useState(
    set(date, {
      hours: date.getHours() + 2,
    })
  );

  // console.log(differenceInHours(medicalTime, currentDate));

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
      setCurrentDate(new TZDate().toString());
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  }, []);
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`font-bold flex flex-col justify-center text-second-main ${className}`}
      >
        <p className="text-3xl ">Alarm For :</p>
        <p className="text-7xl">Panadol</p>
        <div className="flex gap-2 text-7xl">
          <p className=" flex items-center flex-col">
            {hours <= 9 ? `0${hours}` : hours}
            <span className="text-xl">Hours</span>
          </p>
          <p className="">:</p>
          <p className=" flex items-center flex-col">
            {minutes <= 9 ? `0${minutes}` : minutes}
            <span className="text-xl">minutes</span>
          </p>
          <p className="">:</p>
          <p className=" flex items-center flex-col">
            {seconds <= 9 ? `0${seconds}` : seconds}
            <span className="text-xl">seconds</span>
          </p>
        </div>
      </motion.div>
      {/* <AlarmAudio ref={ref} /> */}
    </>
  );
}

export default Alarm;
