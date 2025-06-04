import Image from "next/image";
import cancerImage from "../../public/cancerPhoto.png";
import { format } from "date-fns";
import { getTranslations } from "next-intl/server";
async function CancerPhotoItem({ image }) {
  const t = await getTranslations("Cancer Photos");

  return (
    <div className="flex justify-between items-center gap-7 hover:bg-gray-300 transition duration-500 cursor-pointer p-5 rounded-lg ">
      <div className="relative w-32 h-32  overflow-hidden">
        <Image fill src={`${process.env.APi_URL}${image.photo}`} alt="cancer" />
      </div>
      <div className="flex flex-col flex-1 gap-2 justify-center items-center">
        <p className="font-bold text-3xl text-second-main">
          {image.cancer_type}
        </p>
        <div className="flex gap-5">
          <p className="text-paragraph text-xl">{t("Classification")}</p>
          <p className="text-paragraph text-xl">{image.classification}</p>
        </div>
        <div className="flex gap-5 text-xl text-paragraph">
          <p>{t("Confidence Score")}</p>
          <p>{image.confidence_score}%</p>
        </div>
        <p className="text-paragraph text-xl">
          {" "}
          {format(new Date(), "yyyy-MM-dd")}
        </p>
      </div>
    </div>
  );
}

export default CancerPhotoItem;
