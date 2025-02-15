"use client";
import { use } from "react";
import { addAvailability } from "../_lib/actions";
function AvailabilityDoctorTime() {
  const dayes = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
  ];
  return (
    <div className="bg-second-main p-4 rounded-lg flex-1 space-y-4 h-fit text-white">
      <h3 className="text-3xl font-bold">Set Your Time availability</h3>
      <form action={addAvailability} className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bold">Start Time</label>

          <select
            defaultValue="select day"
            name="day"
            required
            className="text-black px-4 py-2 rounded-lg"
          >
            {dayes.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bold">Start Time</label>
          <input
            name="start_time"
            type="time"
            required
            className="text-black px-4 py-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bold">End Time</label>
          <input
            name="end_time"
            type="time"
            required
            className="text-black px-4 py-2 rounded-lg"
          />
        </div>
        <button className="bg-white text-second-main px-4 py-2 text-xl font-semibold rounded-full">
          Save
        </button>
      </form>
    </div>
  );
}

export default AvailabilityDoctorTime;
