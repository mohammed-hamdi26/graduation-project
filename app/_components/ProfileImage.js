"use client";
import Image from "next/image";
import { useState } from "react";
import { editUserPhoto } from "../_lib/actions";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
function ProfileImage({ image }) {
  const t = useTranslations("profile");
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit } = useForm();
  const [newImage, setNewImage] = useState(null);
  function handleImageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setNewImage(e.target.files[0]);
    }
  }

  async function submit() {
    const formData = new FormData();
    formData.append("profile_picture", newImage);
    try {
      setIsLoading(true);
      const res = await editUserPhoto(formData);
      toast.success("Image updated successfully");

      setIsLoading(false);
    } catch (e) {
      isLoading(false);
      toast.error("there error in update the image");
    }
  }
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-2">
        <div className="w-16 h-16 relative">
          <Image
            className="rounded-full object-cover"
            src={newImage ? URL.createObjectURL(newImage) : image}
            alt=""
            fill
          />
        </div>
        <h3 className="text-lg">{t("Profile picture")}</h3>
      </div>
      <form onSubmit={handleSubmit(submit)} className="flex items-center gap-4">
        {newImage && (
          <button
            disabled={isLoading}
            type="submit"
            className="bg-second-main  p-2 px-4 rounded-full text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Save Photo
          </button>
        )}
        <label
          htmlFor="change-image"
          className="bg-second-main bg-opacity-40 p-2 px-4 rounded-full text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed "
        >
          {t("Upload new picture")}
          <input
            onChange={handleImageChange}
            id="change-image"
            type="file"
            class="hidden"
          />
        </label>
      </form>
    </div>
  );
}

export default ProfileImage;
