import bg from "@/public/homeBackGround.png";
import Image from "next/image";
import Button from "../_components/Button";
import FormLogin from "../_components/FormLogin";

function page() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-transparent backdrop-blur-lg"></div>
      <Image
        fill
        className="-z-20  object-cover object-top"
        placeholder="blur"
        alt="home background"
        src={bg}
      />
      <FormLogin />
    </div>
  );
}

export default page;
