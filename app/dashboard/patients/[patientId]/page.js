import { getPatient } from "@/app/_lib/data-service";
import { FaFemale, FaMale, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";
import cancerImage from "@/public/cancerPhoto.png";
import patientImage from "@/public/mohammed.png";
export default async function page({ params }) {
  const patient = await getPatient(params.patientId);

  console.log(patient);
  return (
    <div className=" flex justify-center items-center  h-full">
      <div className=" flex flex-col    w-7/12">
        <div className="   bg-main flex justify-between items-center p-5 rounded-t-lg text-white text-4xl font-semibold ">
          <div className="flex items-center gap-4 capitalize">
            <div className="relative h-20 w-20">
              <Image
                src={patientImage}
                fill
                className="object-cover rounded-full"
                alt=""
              />
            </div>
            <p>
              {patient.first_name} {patient.last_name}
            </p>
          </div>
          {/* <p>30306021702036</p> */}
        </div>
        <div className="flex-[0.5]  bg-gray-100 p-3 rounded-b-lg flex justify-between items-center ">
          {" "}
          <div className="space-y-8 text-3xl capitalize">
            <p className="flex items-center gap-2 ">
              <FaPhoneAlt /> {patient.phone}
            </p>
            {/* <p className="flex items-center gap-2 ">
              <MdEmail /> moodtest.com
            </p> */}
            <p className="flex items-center gap-2 ">
              {patient.gender === "M" ? <FaMale /> : <FaFemale />}
              {patient.gender === "M" ? "male" : "female"}
            </p>
            <p className="flex items-center gap-2 ">
              <CiCalendarDate /> 25
            </p>
          </div>
          <div className="relative w-72  h-72">
            <Image src={cancerImage} fill alt="" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
