import bg from "@/public/homeBackGround.png";
import Image from "next/image";
import Button from "../../_components/Button";
import FormLogin from "../../_components/FormLogin";
import WelcomePageBackground from "../../_components/WelcomePageBackground";
import { getTranslations } from "next-intl/server";

async function page() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-transparent backdrop-blur-lg"></div>
      <WelcomePageBackground />
      <FormLogin />
    </div>
  );
}

export default page;
