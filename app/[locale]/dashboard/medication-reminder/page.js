import MedicalContainer from "@/app/_components/MedicalContainer";
import ModalAddAlarm from "@/app/_components/ModalAddAlarm";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("Medication reminder");
  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">{t("Medication reminder")}</span>{" "}
      </h2>
      <MedicalContainer />
      <ModalAddAlarm />
    </div>
  );
}
