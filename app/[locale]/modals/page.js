import ModalsContainer from "@/app/_components/ModalsContainer";

import skinCancerBg from "@/public/skin-cancer-background.jpeg";
import lungCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92642.jpeg";
import ColonCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92643.jpeg";
import ModalBox from "@/app/_components/ModalBox";
import { getLocale, getTranslations } from "next-intl/server";
export default async function page() {
  const t = await getTranslations("modals");
  const locale = await getLocale();
  return (
    <div className="px-8 py-6 overflow-hidden">
      <ModalsContainer>
        <ModalBox imageSrc={skinCancerBg} href={`modals/check`}>
          {t("Skin cancer")}
        </ModalBox>
        <ModalBox imageSrc={lungCancerBg} href={`modals/check`}>
          {t("lung Cancer")}
        </ModalBox>
        <ModalBox imageSrc={ColonCancerBg} href={`modals/check`}>
          {t("Colon cancer")}
        </ModalBox>
        <ModalBox imageSrc={ColonCancerBg} href={`modals/check`}>
          Colon cancer
        </ModalBox>
      </ModalsContainer>
    </div>
  );
}
