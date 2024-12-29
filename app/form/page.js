import Image from "next/image";

import bg from "@/public/homeBackGround.png";
import FormSignUp from "../_components/FormSignUp";
import WelcomePageBackground from "../_components/WelcomePageBackground";

export default function page() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-transparent backdrop-blur-lg"></div>
      <WelcomePageBackground />
      <FormSignUp />
    </div>
  );
}
