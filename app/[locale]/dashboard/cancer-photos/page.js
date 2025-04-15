import CancerPhotosContainer from "@/app/_components/CancerPhotosContainer";
import { getUploadedPhotos, getUser } from "@/app/_lib/data-service";
import { getTranslations } from "next-intl/server";

export default async function page() {
  // const user = await getUser();
  const t = await getTranslations("Cancer Photos");

  return (
    <div className="h-full   space-y-8">
      <h2 className="text-second-main text-4xl font-bold  capitalize flex flex-col">
        {t("Cancer Photos")}
      </h2>
      <CancerPhotosContainer />
    </div>
  );
}
