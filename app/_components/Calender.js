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
import { bookAppointment } from "../_lib/actions";
function Calender({ availability, docID, userID, bookedAppointments }) {
  const currentDate = getDateWithOutTime(new Date());

  const [selectedDay, setSelectedDay] = useState(currentDate);

  const [selectedBookTime, setSelectedBookTime] = useState(null);

  const days = eachDayOfInterval({
    start: new Date(),
    end: lastDayOfMonth(currentDate),
  });

  return (
    <div className="bg-white w-96 h-fit p-6 flex flex-col justify-between gap-8 rounded-lg">
      <div className="space-y-4">
        <h3 className="text-2xl text-second-main font-bold">
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
      <AppointmentContainer
        bookedAppointments={bookedAppointments}
        setSelectedBookTime={setSelectedBookTime}
        availability={availability}
        selectedBook={selectedBookTime}
      />
      <Button
        className="rounded-lg"
        onClick={async () => {
          const data = {
            doctor: docID,
            date: format(selectedDay, "yyyy-MM-dd"),
            time: format(selectedBookTime, "hh:mm:ss"),
            patient: userID,
          };
          await bookAppointment(data);
        }}
      >
        Confirm your booking
      </Button>
    </div>
  );
}

export default Calender;
