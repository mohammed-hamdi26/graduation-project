"use client";
import { eachDayOfInterval, format, getDate, lastDayOfMonth } from "date-fns";
import { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getDateWithOutTime } from "../_lib/helps";
import AppointmentContainer from "./AppointmentContainer";
import Button from "./Button";
import DateBox from "./DateBox";
function Calender() {
  const currentDate = getDateWithOutTime(new Date());

  const [selectedDay, setSelectedDay] = useState(currentDate);

  const days = eachDayOfInterval({
    start: new Date(),
    end: lastDayOfMonth(currentDate),
  });

  return (
    <div className="bg-white w-96 h-fit p-6 flex flex-col justify-between gap-8 rounded-lg">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">
          {format(currentDate, "MMMM")}
        </h3>
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          className="w-full"
          modules={[Scrollbar, Pagination]}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        >
          {days.map((day) => (
            <SwiperSlide key={day}>
              <DateBox
                onClick={() => {
                  setSelectedDay(getDateWithOutTime(day));
                }}
                backGroundColor={
                  selectedDay === getDateWithOutTime(day) && " bg-second-main"
                }
                textColor={
                  selectedDay === getDateWithOutTime(day) && "text-white"
                }
                day={getDate(day)}
                dayOfWeak={format(day, "EEE")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AppointmentContainer />
      <Button className="rounded-lg">Confirm your booking</Button>
    </div>
  );
}

export default Calender;
