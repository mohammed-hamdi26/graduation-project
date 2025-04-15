import DoctorsContainer from "@/app/_components/DoctorsContainer";
import Spinner from "@/app/_components/Spinner";
import { getDoctors } from "@/app/_lib/data-service";
import { getTranslations } from "next-intl/server";

import { Suspense } from "react";

export default async function page() {
  const doctors = await getDoctors();
  const t = await getTranslations("doctors");

  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize">
        <span className="text-4xl font-bold">{t("Doctors")}</span>{" "}
      </h2>

      <Suspense fallback={<Spinner />}>
        <DoctorsContainer doctors={doctors} />
      </Suspense>
    </div>
  );
}
