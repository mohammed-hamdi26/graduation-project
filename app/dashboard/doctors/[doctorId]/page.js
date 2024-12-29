import Image from "next/image";
import dcImage from "@/public/mohammed2.png";
import Calender from "@/app/_components/Calender";
import { getDoctor } from "@/app/_lib/data-service";
export default async function page({ params }) {
  const { doctorId } = await params;
  const doctor = await getDoctor(doctorId);
  return (
    <div className="space-y-8">
      {/* <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">
          Dr {doctor.first_name} {doctor.last_name}{" "}
        </span>{" "}
      </h2> */}
      <div className="flex gap-6">
        <div className="w-[333px] h-[519px] relative">
          <Image
            src={`${process.env.APi_URL}${doctor.img}`}
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
        <Calender />
      </div>
    </div>
  );
}
