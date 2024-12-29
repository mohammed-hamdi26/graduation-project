import UpdateProfile from "@/app/_components/UpdateProfile";
import ProfileImage from "../../_components/ProfileImage";

export default function page() {
  return (
    <div className="space-y-4 bg-white  px-8 py-4 rounded-lg shadow-lg shadow-gray-300 ">
      <h2 className="text-xl text-second-main font-bold">Personal Data</h2>
      <div className=" space-y-4 divide-y-2  divide-gray-300 py-4">
        <ProfileImage />
        <UpdateProfile />
      </div>
    </div>
  );
}
