import PatientContainer from "@/app/_components/PatientContainer";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations("Patients");
  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">{t("Patients")}</span>{" "}
      </h2>
      <PatientContainer />
    </div>
  );
}
