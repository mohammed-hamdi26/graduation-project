import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import userImage from "@/public/Rectangle 94.png";
import { getUser } from "../_lib/data-service";
async function NavProfileItem() {
  const user = await getUser();
  console.log(user);

  return (
    <div className=" w-full border-t flex items-center gap-2 py-2 mt-auto justify-self-center cursor-pointer px-4 transition-[background-color] duration-500 hover:bg-gray-200">
      <div className=" relative w-12 h-12 rounded-full overflow-hidden">
        <Image
          className="object-cover object-right-top"
          src={`${process.env.APi_URL}/${user.profile_picture}`}
          fill
          alt=""
        />
      </div>
      <div className="hidden  md:block flex-1">
        <h3 className=" text-sm md:text-base font-medium">
          Hallo, {user.first_name} 👋
        </h3>
        <p className=" text-sm text-[#64748B]">
          {user.staff ? "Doctor" : "Patient"}{" "}
        </p>
      </div>
      <div className="text-sm md:text-base">
        <IoIosArrowForward className="" />
      </div>
    </div>
  );
}

export default NavProfileItem;
