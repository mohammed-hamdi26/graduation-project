"use client";

import { addDays, eachDayOfInterval, format } from "date-fns";
import { addAvailability } from "../_lib/actions";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslations } from "next-intl";
function AvailabilityDoctorTime({ docID }) {
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations("doctor-home");

  const { formState, handleSubmit, register } = useForm();
  const dayes = eachDayOfInterval({
    start: new Date(),
    end: addDays(new Date(), 6),
  });

  async function submit(data) {
    const sendDate = {
      ...data,
      department: "اخصائي سكر الاطفال",
      doctor: docID,
      start_time: `${data.start_time}:00`,
      end_time: `${data.end_time}:00`,
    };
    try {
      setIsLoading(true);
      const res = await addAvailability(sendDate);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);

      console.log(e);
    }
  }

  return (
    <div className="bg-second-main p-4 rounded-lg flex-1 space-y-4 h-fit text-white">
      <h3 className="text-3xl font-bold">{t("Set Your Time availability")}</h3>
      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bold">{t("Selected Day")}</label>

          <select
            defaultValue="select day"
            {...register("date", { required: true })}
            required
            className="text-black px-4 py-2 rounded-lg"
          >
            {dayes.map((day) => (
              <option key={day}>{format(day, "yyyy-MM-dd")}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-3 ">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-2xl font-bold">{t("Start Time")}</label>
            <input
              {...register("start_time", { required: true })}
              type="time"
              required
              className="text-black px-4 py-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-2xl font-bold">{t("End Time")}</label>
            <input
              {...register("end_time", { required: true })}
              type="time"
              required
              className="text-black px-4 py-2 rounded-lg"
            />
          </div>
        </div>
        <div className="flex ">
          <button
            disabled={isLoading}
            className="bg-white text-second-main px-4 py-2 text-xl font-semibold rounded-full w-full  disabled:bg-gray-500"
          >
            {t("Save")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AvailabilityDoctorTime;
