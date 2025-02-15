"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import UploadImage from "./UploadImage";
import TheUploadedImage from "./TheUploadedImage";
import ResultModal from "./ResultModal";

import { checkModel, uploadPhoto, useModel } from "../_lib/actions";
import toast from "react-hot-toast";
import { set } from "date-fns";

function ImagePreview() {
  const [image, setImage] = useState(null);
  const [isImageChecked, setIsImageChecked] = useState(false);
  const [predict, setPredict] = useState({});

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  async function checkImage() {
    const formData = new FormData();
    // formData.append("photo", image);
    // formData.append("uploader", 1);
    formData.append("image", image);
    // formData.append("uploader", 1);
    try {
      // await uploadPhoto(formData);
      const predict = await checkModel(formData);
      setIsImageChecked(true);
      setPredict(predict);

      toast.success("the image uploaded");
    } catch (e) {
      console.log(e);
      toast.error("there error in upload image");
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
          <ResultModal
            image={image}
            typeCancer={predict?.predicted_label}
            confidenceScore={Number(predict.confidence).toFixed(2)}
          />
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
