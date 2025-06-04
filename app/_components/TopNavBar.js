// import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { logout } from "../_lib/actions";
import Button from "./Button";
import ChangeButton from "./ChangeButton";

async function TopNavBar() {
  // const t = await getTranslations("home-patient");

  return (
    <div className=" px-8 py-4   absolute  top-0  w-full flex items-center justify-end gap-3">
      <ChangeButton />
      <form action={logout}>
        {/* <Button className="bg-[#b23b3b] hover:bg-[#a03535] text-white text-xl px-4 py-2 rounded-lg  font-bold ">
        </Button> */}
        <button>
          <CiLogout className="text-3xl  hover:text-[#a03535] cursor-pointer transition duration-500" />
        </button>
      </form>
    </div>
  );
}

export default TopNavBar;
