import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

async function WelcomeInfo() {
  const t = await getTranslations("home");
  const locale = await getLocale("common");

  return (
    <div className="flex flex-col items-center text-center w-3/4 space-y-3 mt-4">
      <h1 className="text-lg sm:text-3xl md:text-7xl font-bold">
        {t("title")}!
      </h1>
      <p className="text-sm md:text-xl font-bold text-[#C4C4C4]">
        {t("description")}
      </p>
      <div className=" flex flex-col sm:flex-row items-center gap-6">
        <Link
          className=" min-w-40 bg-second-main p-4 rounded-full text-2xl font-bold"
          href={`${locale}/login`}
        >
          {t("login")}
        </Link>
        <Link
          className=" min-w-40 bg-second-main p-4  rounded-full text-2xl font-bold"
          href={`${locale}/modals`}
        >
          {t("check yourself")}
        </Link>
      </div>
    </div>
  );
}

export default WelcomeInfo;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
