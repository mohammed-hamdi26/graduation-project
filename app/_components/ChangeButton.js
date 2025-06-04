"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import Flag from "./Flag";
import egyptFlag from "@/public/egypt flag.jpg";
import britchFlag from "@/public/brithch flag.svg";

function ChangeButton() {
  const pathname = usePathname().split("/").slice(2).join("/");
  const searchParams = useSearchParams();
  const locale = useLocale();

  return (
    <Link
      href={`/${pathname}?${searchParams.toString()}`}
      locale={locale === "ar" ? "en" : "ar"}
      className=" px-4 py-2 rounded-md font-bold "
    >
      {locale === "ar" ? <Flag src={britchFlag} /> : <Flag src={egyptFlag} />}
    </Link>
  );
}

export default ChangeButton;
