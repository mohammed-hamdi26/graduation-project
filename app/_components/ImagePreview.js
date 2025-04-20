"use client";

import { useState } from "react";
import ResultModal from "./ResultModal";
import TheUploadedImage from "./TheUploadedImage";
import UploadImage from "./UploadImage";

import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { checkModel } from "../_lib/actions";
import { useTranslations } from "next-intl";

function ImagePreview({ children, savePredict, user }) {
  const [image, setImage] = useState(null);
  const [isImageChecked, setIsImageChecked] = useState(false);
  const [predict, setPredict] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useSearchParams();

  const t = useTranslations("image-preview");
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  async function checkImage() {
    const predictPhoto = new FormData();

    predictPhoto.append("image", image);
    predictPhoto.append("cancer_type", params.get("type"));

    try {
      setIsSubmitting(true);
      const predict = await checkModel(predictPhoto);

      setIsImageChecked(true);
      setPredict(predict);
      if (savePredict)
        savePredict({
          cancer_percentage: predict.confidence.toFixed(2),
          cancer_type: predict?.prediction,
          cancer_photo: image,
        });
      setIsSubmitting(false);
    } catch (e) {
      setIsSubmitting(false);
      console.log(e);
      toast.error("there error in Predicting the image");
    }
  }

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setImage(null);
  };

  return (
    <div className="flex flex-col  flex-1 space-y-4">
      <div class="flex justify-center items-center  w-full">
        {image && isImageChecked ? (
          <div className="flex flex-col items-center space-y-4">
            <ResultModal
              id={user?.id}
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
              image={image}
              typeCancer={predict?.prediction}
              confidenceScore={Number(predict?.confidence).toFixed(2)}
              checkAgain={() => {
                setIsImageChecked(false);
                setImage(null);
              }}
            />
            {predict?.prediction == "Colon benign" ||
            predict?.prediction == "Lung benign tissue" ||
            predict?.prediction == "Benign" ? (
              <div className="text-2xl text-second-main font-bold">
                {t("Thank God, the tumor is benign")} 🥰
              </div>
            ) : (
              children
            )}
          </div>
        ) : (
          image && (
            <TheUploadedImage
              image={image}
              removeSelectedImage={removeSelectedImage}
              checkImage={checkImage}
            />
          )
        )}
        {!image && <UploadImage imageChange={imageChange} />}
      </div>
    </div>
  );
}

export default ImagePreview;
