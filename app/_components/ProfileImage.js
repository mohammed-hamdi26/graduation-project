import Image from "next/image";
import profileImage from "@/public/mohammed.png";
function ProfileImage() {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-2">
        <div className="w-16 h-16 relative">
          <Image className="rounded-full" src={profileImage} alt="" fill />
        </div>
        <h3 className="text-lg">Profile picture</h3>
      </div>
      <button className="bg-second-main bg-opacity-60 p-2 px-4 rounded-full text-white">
        Upload new picture
      </button>
    </div>
  );
}

export default ProfileImage;
