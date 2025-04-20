import { getUploadedPhotos } from "../_lib/data-service";
import CancerPhotoItem from "./CancerPhotoItem";

async function CancerPhotosContainer({ photos, id }) {
  const uploadedImages = await getUploadedPhotos(id);
  console.log(uploadedImages);
  return (
    <div className="grid gap-7 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
      {uploadedImages.map((image) => (
        <CancerPhotoItem key={image.id} image={image} />
      ))}
    </div>
  );
}

export default CancerPhotosContainer;
