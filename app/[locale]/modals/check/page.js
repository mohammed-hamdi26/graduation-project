"use client";
import Button from "@/app/_components/Button";
import ImagePreview from "@/app/_components/ImagePreview";
import { usePredict } from "@/app/_context/predictContext";
import { useLocale } from "next-intl";
import { redirect } from "next/navigation";
import { useTranslations } from "use-intl";

export default function page() {
  const t = useTranslations("image-preview");
  const locale = useLocale();
  const predict = usePredict();

  return (
    <div className="flex justify-center items-center h-screen">
      <ImagePreview savePredict={predict.setPredict}>
        <Button
          onClick={() => {
            redirect(`/${locale}/form`);
          }}
        >
          {t("Go To Form")}
        </Button>
      </ImagePreview>
    </div>
  );
}
