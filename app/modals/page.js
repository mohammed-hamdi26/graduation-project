import ModalsContainer from "../_components/ModalsContainer";

import skinCancerBg from "@/public/skin-cancer-background.jpeg";
import lungCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92642.jpeg";
import ColonCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92643.jpeg";
import ModalBox from "../_components/ModalBox";
export default function page() {
  return (
    <div className="px-8 py-6 overflow-hidden">
      <ModalsContainer>
        <ModalBox imageSrc={skinCancerBg} href={"/modals/check"}>
          Skin cancer
        </ModalBox>
        <ModalBox imageSrc={lungCancerBg} href={"/modals/check"}>
          loung Cancer
        </ModalBox>
        <ModalBox imageSrc={ColonCancerBg} href={"/modals/check"}>
          Colon cancer
        </ModalBox>
        <ModalBox imageSrc={ColonCancerBg} href={"/modals/check"}>
          Colon cancer
        </ModalBox>
      </ModalsContainer>
    </div>
  );
}
