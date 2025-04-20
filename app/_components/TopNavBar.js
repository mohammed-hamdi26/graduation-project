import { getLocale } from "next-intl/server";
// import Link from "next/link";
import { Link } from "@/i18n/navigation";
import { CiLogout } from "react-icons/ci";
import { logout } from "../_lib/actions";
import Button from "./Button";
import { headers } from "next/headers";
import ChangeButton from "./ChangeButton";

async function TopNavBar() {
  // const t = await getTranslations("home-patient");

  return (
    <div className="p-5  bg-white absolute  top-0  w-full flex items-center justify-end gap-3">
      <ChangeButton />
      <form action={logout}>
        <Button className="bg-[#b23b3b] hover:bg-[#a03535] text-white text-xl px-4 py-2 rounded-lg  font-bold ">
          <CiLogout />
        </Button>
      </form>
    </div>
  );
}

export default TopNavBar;
