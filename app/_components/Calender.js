"use client";
import {
  addDays,
  eachDayOfInterval,
  format,
  getDate,
  lastDayOfMonth,
} from "date-fns";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getDateWithOutTime } from "../_lib/helps";
import AppointmentContainer from "./AppointmentContainer";
import Button from "./Button";
import DateBox from "./DateBox";
import { bookAppointment } from "../_lib/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

function Calender({ availability, docID, userID, bookedAppointments }) {
  const t = useTranslations("doctor-page");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const currentDate = getDateWithOutTime(new Date());

  const [isBooking, setIsBooking] = useState(false);

  const [selectedDay, setSelectedDay] = useState(currentDate);

  const [selectedBookTime, setSelectedBookTime] = useState(null);

  const days = eachDayOfInterval({
    start: new Date(),
    end: addDays(new Date(), 6),
  });

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("day", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    if (searchParams.get("day")) {
      setSelectedDay(searchParams.get("day"));
    }
  }, []);

  return (
    <div className="bg-white w-full  lg:w-96 h-fit p-6 flex flex-col justify-between gap-8 rounded-lg">
      <div className="space-y-4">
        <h3 className="text-2xl text-second-main font-bold">
          {t(format(currentDate, "MMMM"))}
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
                  handleFilter(getDateWithOutTime(day));
                }}
                backGroundColor={
                  selectedDay === getDateWithOutTime(day) && " bg-second-main"
                }
                textColor={
                  selectedDay === getDateWithOutTime(day) && "text-white"
                }
                day={getDate(day)}
                dayOfWeak={t(format(day, "EEE"))}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AppointmentContainer
        t={t}
        bookedAppointments={bookedAppointments}
        setSelectedBookTime={setSelectedBookTime}
        availability={availability}
        selectedBook={selectedBookTime}
        selectedDay={selectedDay}
      />
      <Button
        disabled={isBooking}
        className="rounded-lg"
        onClick={async () => {
          const data = {
            doctor: docID,
            date: format(selectedDay, "yyyy-MM-dd"),
            time: format(selectedBookTime, "hh:mm:ss"),
            patient: userID,
          };
          try {
            setIsBooking(true);
            await bookAppointment(data);
            toast.success("success booking");
            setIsBooking(false);
          } catch (e) {
            setIsBooking(false);
            toast.error("error in booking");
          }
        }}
      >
        {t("Confirm your booking")}
      </Button>
    </div>
  );
}

export default Calender;
