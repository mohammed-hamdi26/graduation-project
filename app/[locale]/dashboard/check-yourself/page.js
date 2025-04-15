import ModalBox from "@/app/_components/ModalBox";
import ModalsContainer from "@/app/_components/ModalsContainer";

import skinCancerBg from "@/public/skin-cancer-background.jpeg";
import lungCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92642.jpeg";
import ColonCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92643.jpeg";
import LeukemiaCancer from "@/public/freepik__the-style-is-candid-image-photography-with-natural__25769.png";
import { getLocale, getTranslations } from "next-intl/server";
export default async function page() {
  const t = await getTranslations("modals");
  const local = await getLocale();
  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">{t("Modals")}</span>
      </h2>
      <ModalsContainer>
        <ModalBox
          imageSrc={skinCancerBg}
          href={`/${local}/dashboard/check-yourself/check`}
        >
          {t("Skin cancer")}
        </ModalBox>
        <ModalBox
          imageSrc={lungCancerBg}
          href={`/${local}/dashboard/check-yourself/check`}
        >
          {t("lung Cancer")}
        </ModalBox>
        <ModalBox
          imageSrc={ColonCancerBg}
          href={`/${local}/dashboard/check-yourself/check`}
        >
          {t("Colon cancer")}
        </ModalBox>
        <ModalBox
          imageSrc={LeukemiaCancer}
          href={`/${local}/dashboard/check-yourself/check`}
        >
          {t("Leukemia cancer")}
        </ModalBox>
      </ModalsContainer>
    </div>
  );
}
