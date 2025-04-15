import Image from "next/image";
import patientImage from "@/public/mohammed.png";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useLocale } from "next-intl";
function PatientItem({ name, patientId, image }) {
  const local = useLocale();
  return (
    <Link href={`/${local}/dashboard/patients/${patientId}`}>
      <div className="flex flex-col h-72 cursor-pointer ">
        <div className="relative flex-1">
          <Image
            src={image ? `${process.env.APi_URL}${image}` : ""}
            fill
            className="object-fill object-top rounded-t-lg"
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
