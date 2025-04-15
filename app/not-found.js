import Image from "next/image";
import errorImage from "@/public/error404.svg";
import vectorImage1 from "@/public/Vector1.svg";
import vectorImage2 from "@/public/Vector2.svg";
import Button from "@/app/_components/Button";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-background h-screen overflow-hidden w-full relative">
      <Image src={vectorImage1} alt="" className="absolute bottom-0 left-0" />
      <Image src={vectorImage2} alt="" className="absolute top-0 right-0" />

      {/* <h1 className="text-7xl font-bold text-second-main">Oops!</h1> */}
      <div className="relative size-[600px] animate-error ">
        <Image src={errorImage} fill alt="404" className="object-contain" />
      </div>
      <Button className=" rounded-xl  ">
        <Link href="/" className="text-2xl">
          Go back to home
        </Link>
      </Button>
    </div>
  );
}
