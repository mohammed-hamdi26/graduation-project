"use client";
import Button from "@/app/_components/Button";
import ImagePreview from "@/app/_components/ImagePreview";
import { usePredict } from "@/app/_context/predictContext";
import { redirect } from "next/navigation";

export default function page() {
  const predict = usePredict();

  return (
    <div className="flex justify-center items-center h-screen">
      <ImagePreview savePredict={predict.setPredict}>
        <Button
          onClick={() => {
            redirect("/form");
          }}
        >
          Go To Form
        </Button>
      </ImagePreview>
    </div>
  );
}
