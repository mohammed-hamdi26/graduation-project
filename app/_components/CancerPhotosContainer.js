import Image from "next/image";
import { getUploadedPhotos } from "../_lib/data-service";
import CancerPhotoItem from "./CancerPhotoItem";
import notFoundImage from "@/public/Filesearching-cuate.png";
import { getTranslations } from "next-intl/server";
async function CancerPhotosContainer({ photos, id }) {
  const uploadedImages = await getUploadedPhotos(id);

  const t = await getTranslations("Cancer Photos");

  if (uploadedImages.length === 0) {
    return (
      <div className="flex flex-col  items-center h-full w-full">
        <Image src={notFoundImage} alt="no data" width={450} height={450} />
        <p className="text-5xl font-bold text-second-main">
          {t("No Cancer Photos")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-7 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
      {uploadedImages.map((image) => (
        <CancerPhotoItem key={image.id} image={image} />
      ))}
    </div>
  );
}

export default CancerPhotosContainer;
