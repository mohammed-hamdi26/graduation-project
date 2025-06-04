import UpdateProfile from "@/app/_components/UpdateProfile";
import ProfileImage from "../../../_components/ProfileImage";
import { getUser } from "@/app/_lib/data-service";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const user = await getUser();
  const t = await getTranslations("profile");

  return (
    <div className="space-y-4 bg-white  px-8 py-4 rounded-lg shadow-lg shadow-gray-300 ">
      <h2 className="text-xl text-second-main font-bold">
        {t("Personal Data")}
      </h2>
      <div className=" space-y-4 divide-y-2  divide-gray-300 py-4">
        <ProfileImage
          user={user}
          image={
            user.staff
              ? user.doc_img
                ? `${process.env.APi_URL}${user.doc_img}`
                : ""
              : user.profile_picture
              ? `${process.env.APi_URL}${user.profile_picture}`
              : ""
          }
        />
        <UpdateProfile user={user} />
      </div>
    </div>
  );
}
