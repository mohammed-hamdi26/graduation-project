import ForgetTitle from "@/app/_components/ForgetTitle";
import FormSetPassword from "@/app/_components/FormSetPassword";
import { Link } from "@/i18n/navigation";
import ImageEmail from "@/public/Rectangle 20.png";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
export default async function page() {
  const [t, locale] = await Promise.all([
    getTranslations("set-password"),
    getLocale(),
  ]);
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="w-5/6 mx-auto flex items-center gap-28 ">
        <div className=" flex-1">
          <Link href="/login" className="flex gap-1 items-center w-fit">
            <IoIosArrowBack
              className={`text-2xl ${locale === "ar" ? "rotate-180" : ""}`}
            />{" "}
            {t("Back to login")}
          </Link>
          <ForgetTitle
            description={t("description")}
            title={t("Set password")}
          />
          <FormSetPassword />
        </div>
        <div className="relative h-[600px] flex-1 rounded-lg overflow-hidden ">
          <Image
            src={ImageEmail}
            className="object-cover"
            alt=""
            fill
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
