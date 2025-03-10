import CancerPhotosContainer from "@/app/_components/CancerPhotosContainer";

export default function page() {
  return (
    <div className="h-full   space-y-8">
      <h2 className="text-second-main text-4xl font-bold  capitalize flex flex-col">
        Cancer Photos
      </h2>
      <CancerPhotosContainer />
    </div>
  );
}
