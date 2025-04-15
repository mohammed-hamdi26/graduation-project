import { useTranslations } from "next-intl";
import Button from "./Button";

function TheUploadedImage({ image, removeSelectedImage, checkImage }) {
  const t = useTranslations("image-preview");
  return (
    <div className="relative aspect-square flex-1 max-w-[450px] max-h-[500px] space-y-5 w-full h-64 border-2 border-gray-300 border-dashed rounded-lg  bg-gray-50 ">
      <img
        className="object-contain  w-full h-full  rounded-lg"
        src={URL.createObjectURL(image)}
        alt="Thumb"
      />
      <div className="flex gap-4">
        <Button onClick={checkImage} className="rounded-xl text-sm flex-1">
          {t("check yourself")}
        </Button>
        <Button
          onClick={removeSelectedImage}
          className="rounded-xl text-sm flex-1 bg-gray-400"
        >
          {t("Remove This Image")}
        </Button>
      </div>
    </div>
  );
}

export default TheUploadedImage;
