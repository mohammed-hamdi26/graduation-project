import ImagePreview from "@/app/_components/ImagePreview";
import { getUser } from "@/app/_lib/data-service";
import { getTranslations } from "next-intl/server";

async function page() {
  const t = await getTranslations("modals");
  const user = await getUser();
  return (
    <div className="space-y-8 h-full flex flex-col">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">{t("Modals")}</span>
      </h2>
      <ImagePreview user={user} />
    </div>
  );
}

export default page;
