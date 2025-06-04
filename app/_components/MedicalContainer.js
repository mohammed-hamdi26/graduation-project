import Image from "next/image";
import { getAlarms, getUser } from "../_lib/data-service";
import MedicationItem from "./MedicationItem";
import notFoundImage from "@/public/Filesearching-cuate.png";
import { getTranslations } from "next-intl/server";

async function MedicalContainer() {
  const user = await getUser();
  const t = await getTranslations("Medication reminder");

  const medications = await getAlarms(user.id);

  if (medications.length === 0)
    return (
      <div className="flex flex-col  items-center h-full w-full">
        <Image src={notFoundImage} alt="no data" width={450} height={450} />
        <p className="text-5xl font-bold text-second-main">
          {t("No Medications")}
        </p>
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {medications?.map((medication) => (
        <MedicationItem key={medication.id} medication={medication} />
      ))}
    </div>
  );
}

export default MedicalContainer;
