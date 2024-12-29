import Image from "next/image";
import patientImage from "@/public/mohammed.png";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
function PatientItem({ name, patientId }) {
  return (
    <Link href={`/dashboard/patients/${patientId}`}>
      <div className="flex flex-col h-72 cursor-pointer ">
        <div className="relative flex-1">
          <Image
            src={patientImage}
            fill
            className="object-cover rounded-t-lg"
            alt=""
          />
        </div>
        <div className="bg-second-main p-3 grow-[0.3] rounded-b-lg flex items-center justify-between ">
          <p className="text-white capitalize font-bold text-2xl">{name}</p>
          <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
            <IoIosArrowForward className="text-2xl text-second-main" />
          </div>
        </div>{" "}
      </div>
    </Link>
  );
}

export default PatientItem;