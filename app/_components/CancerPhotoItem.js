import Image from "next/image";
import cancerImage from "../../public/cancerPhoto.png";
import { format } from "date-fns";
import { getTranslations } from "next-intl/server";
async function CancerPhotoItem({ image }) {
  const t = await getTranslations("Cancer Photos");

  return (
    <div className="flex items-center gap-7 hover:bg-gray-300 transition duration-500 cursor-pointer p-5 rounded-lg ">
      <div className="relative w-32 h-32  overflow-hidden">
        <Image fill src={`${process.env.APi_URL}${image.photo}`} alt="cancer" />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <p className="font-bold text-3xl text-second-main">Cancer</p>
        <div className="flex gap-5 text-xl text-paragraph">
          <p>{t("Confidence Score")}</p>
          <p>90%</p>
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
