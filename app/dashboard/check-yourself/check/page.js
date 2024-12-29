import ImagePreview from "@/app/_components/ImagePreview";

function page() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">Modals</span>
      </h2>
      <ImagePreview />
    </div>
  );
}

export default page;
