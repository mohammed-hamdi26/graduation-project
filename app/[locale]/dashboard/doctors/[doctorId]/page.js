import Image from "next/image";
import dcImage from "@/public/mohammed2.png";
import Calender from "@/app/_components/Calender";
import {
  getBookedAppointmentsForDoctor,
  getDoctor,
  getDoctorAvailability,
  getUser,
} from "@/app/_lib/data-service";
import { format } from "date-fns";
import { getTranslations } from "next-intl/server";

export default async function page({ params, searchParams }) {
  const { day } = await searchParams;
  const { doctorId } = await params;
  const doctor = await getDoctor(doctorId);
  console.log(doctor);
  const calanderAvailability = await getDoctorAvailability(
    doctorId,
    day || format(new Date(), "yyyy-MM-dd")
  );
  const user = await getUser();
  const t = await getTranslations("doctor-page");

  const bookedAppointments = await getBookedAppointmentsForDoctor(doctorId);
  console.log(bookedAppointments);
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className=" w-full lg:w-[333px] h-[519px] relative">
          <Image
            src={doctor.img ? `${process.env.APi_URL}${doctor.img}` : ""}
            fill
            className="object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="flex-1 space-y-6">
          <h3 className="text-4xl text-second-main font-bold">
            Dr {doctor.doc_first_name} {doctor.doc_last_name}{" "}
          </h3>
          <p className="text-[#BBBBBB] text-[28px] font-medium">
            <span className="text-second-main">{t("Department")} :</span>
            {doctor.specialty}
          </p>
          <p className="text-xl text-[#BBBBBB] ">{doctor.bio}</p>
        </div>
        <Calender
          bookedAppointments={bookedAppointments}
          userID={user.id}
          docID={doctorId}
          availability={calanderAvailability}
        />
      </div>
    </div>
  );
}
