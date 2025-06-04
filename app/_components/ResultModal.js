"use client";
import { format } from "date-fns";
import { motion } from "motion/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { uploadPhoto } from "../_lib/actions";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function ResultModal({
  typeCancer,
  confidenceScore,
  image,
  checkAgain,
  isSubmitting,
  setIsSubmitting,
  classification,
  id,
}) {
  const { handleSubmit } = useForm();
  const t = useTranslations("image-preview");
  const pathname = usePathname();
  async function submit() {
    const formData = new FormData();
    formData.append("uploader", id);
    formData.append("photo", image);
    formData.append("confidence_score", confidenceScore);
    formData.append("cancer_type", typeCancer);
    formData.append("classification", classification);
    formData.append("submitted_date", format(new Date(), "yyyy-MM-dd"));

    try {
      setIsSubmitting(true);
      const res = await uploadPhoto(formData);

      toast.success("Image uploaded successfully");
      setIsSubmitting(false);
    } catch (e) {
      setIsSubmitting(false);
      console.log(e);
      toast.error("there error in uploading the image");
    }
  }
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className=" p-4 rounded-lg w-[650px] space-y-6"
    >
      <h2 className="text-4xl text-second-main uppercase font-semibold text-center">
        {t("the result")}
      </h2>
      <div className="relative w-full  max-w-[450px] h-[300px] mx-auto">
        <Image
          fill
          alt=""
          className="object-cover rounded-lg"
          src={URL.createObjectURL(image)}
        />
      </div>
      <div className="flex justify-between text-xl text-white gap-4">
        <p className="bg-second-main bg-opacity-50 p-2 rounded-md">
          {t("type of Cancer")} {typeCancer}{" "}
        </p>
        <p className="bg-second-main bg-opacity-50 p-2 rounded-md">
          {t("Confidence Score")} : {confidenceScore}
        </p>
      </div>
      <div
        className={`flex ${
          !pathname.includes("modals") ? "justify-between" : "justify-center"
        }  text-2xl font-bold `}
      >
        <button
          disabled={isSubmitting}
          className="bg-second-main p-2 px-4 rounded-md text-white uppercase hover:bg-opacity-70 transition-all duration-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={checkAgain}
        >
          {t("check another image")}
        </button>
        {!pathname.includes("modals") && (
          <form onSubmit={handleSubmit(submit)}>
            <button
              disabled={isSubmitting}
              className="bg-second-main p-2 px-4 rounded-md text-white uppercase hover:bg-opacity-70 transition-all duration-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {t("save the result")}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export default ResultModal;
