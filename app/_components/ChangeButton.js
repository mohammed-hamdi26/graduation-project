"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";

function ChangeButton() {
  const pathname = usePathname().split("/").slice(2).join("/");
  const searchParams = useSearchParams();
  const locale = useLocale();
  console.log(pathname);
  return (
    <Link
      href={`/${pathname}?${searchParams.toString()}`}
      locale={locale === "ar" ? "en" : "ar"}
      className="bg-second-main text-white px-4 py-2 rounded-md font-bold hover:bg-second-main/80 transition duration-500"
    >
      {locale === "ar" ? "en" : "ar"}
    </Link>
  );
}

export default ChangeButton;
