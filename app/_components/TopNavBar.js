import { getLocale } from "next-intl/server";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { logout } from "../_lib/actions";
import Button from "./Button";
import { headers } from "next/headers";
// import { Link } from "@/i18n/navigation";

async function TopNavBar() {
  // const t = await getTranslations("home-patient");
  const locale = await getLocale();

  return (
    <div className="p-5  bg-white absolute  top-0  w-full flex justify-end">
      <form action={logout}>
        <Button className="bg-[#b23b3b] hover:bg-[#a03535] text-white text-xl px-4 py-2 rounded-lg  ">
          <CiLogout />
        </Button>
      </form>
      <Link href={`/${locale}`} locale={locale}>
        {"Switch to english"}
      </Link>
    </div>
  );
}

export default TopNavBar;
