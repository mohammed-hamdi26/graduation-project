import ContactForm from "@/app/_components/ContactForm";
import { getUser } from "@/app/_lib/data-service";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const user = await getUser();
  const t = await getTranslations("Contact us");
  return (
    <div className="space-y-8">
      <h2 className="text-second-main text-2xl capitalize text-center">
        <span className="text-6xl font-bold">{t("Contact us")}</span>{" "}
      </h2>
      <ContactForm user={user} />
    </div>
  );
}
