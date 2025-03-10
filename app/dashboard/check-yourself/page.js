import ModalBox from "@/app/_components/ModalBox";
import ModalsContainer from "@/app/_components/ModalsContainer";

import skinCancerBg from "@/public/skin-cancer-background.jpeg";
import lungCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92642.jpeg";
import ColonCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92643.jpeg";
import LeukemiaCancer from "@/public/freepik__the-style-is-candid-image-photography-with-natural__25769.png";
export default function page() {
  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">Modals</span>
      </h2>
      <ModalsContainer>
        <ModalBox
          imageSrc={skinCancerBg}
          href={"/dashboard/check-yourself/check"}
        >
          Skin cancer
        </ModalBox>
        <ModalBox
          imageSrc={lungCancerBg}
          href={"/dashboard/check-yourself/check"}
        >
          loung Cancer
        </ModalBox>
        <ModalBox
          imageSrc={ColonCancerBg}
          href={"/dashboard/check-yourself/check"}
        >
          Colon cancer
        </ModalBox>
        <ModalBox
          imageSrc={LeukemiaCancer}
          href={"/dashboard/check-yourself/check"}
        >
          Leukemia cancer
        </ModalBox>
      </ModalsContainer>
    </div>
  );
}
