import Image from "next/image";
import dcImage from "@/public/mohammed2.png";
import Calender from "@/app/_components/Calender";
import {
  getBookedAppointmentsForDoctor,
  getDoctor,
  getDoctorAvailability,
  getUser,
} from "@/app/_lib/data-service";
import { get } from "axios";
export default async function page({ params }) {
  const { doctorId } = await params;
  const doctor = await getDoctor(doctorId);
  const calanderAvailability = await getDoctorAvailability(doctor.id);
  const user = await getUser();

  const bookedAppointments = await getBookedAppointmentsForDoctor(doctor.id);
  return (
    <div className="space-y-8">
      <div className="flex gap-6">
        <div className="w-[333px] h-[519px] relative">
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
            <span className="text-second-main">Deparment :</span>
            {doctor.specialty}
          </p>
          <p className="text-xl text-[#BBBBBB] ">{doctor.bio}</p>
        </div>
        <Calender
          bookedAppointments={bookedAppointments}
          userID={user.id}
          docID={doctor.id}
          availability={calanderAvailability[0]}
        />
      </div>
    </div>
  );
}
