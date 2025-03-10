import CancerPhotoItem from "./CancerPhotoItem";

function CancerPhotosContainer() {
  return (
    <div className="grid gap-7 grid-cols-3">
      <CancerPhotoItem />
      <CancerPhotoItem />
      <CancerPhotoItem />
      <CancerPhotoItem />
      <CancerPhotoItem />
    </div>
  );
}

export default CancerPhotosContainer;
