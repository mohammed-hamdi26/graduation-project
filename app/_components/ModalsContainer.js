import ModalBox from "./ModalBox";
import skinCancerBg from "@/public/skin-cancer-background.jpeg";
import lungCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92642.jpeg";
import ColonCancerBg from "@/public/freepik__candid-image-photography-natural-textures-highly-r__92643.jpeg";
function ModalsContainer() {
  return (
    <div className="grid grid-cols-2 gap-9">
      <ModalBox imageSrc={skinCancerBg}>Skin cancer</ModalBox>
      <ModalBox imageSrc={lungCancerBg}>loung Cancer</ModalBox>
      <ModalBox imageSrc={ColonCancerBg}>Colon cancer</ModalBox>
      <ModalBox imageSrc={ColonCancerBg}>Colon cancer</ModalBox>
    </div>
  );
}

export default ModalsContainer;
