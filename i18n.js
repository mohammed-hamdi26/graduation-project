import { notFound } from "next/navigation";

import { getRequestConfig } from "next-intl/server";
const locales = ["en", "ar"];

export default getRequestConfig(async ({ requestLocale }) => {
  console.log(await requestLocale);
  const locale = await requestLocale;

  console.log(locale);
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
