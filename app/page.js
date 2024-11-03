import Image from "next/image";
import Link from "next/link";
import bg from "@/public/homeBackGround.png";
export default function Home() {
  return (
    <div className="relative  flex justify-center items-center h-full text-white ">
      <div className="-z-10 absolute top-0 left-0 w-full h-full bg-black bg-opacity-65"></div>
      <Image
        fill
        className="-z-20  object-cover object-top"
        placeholder="blur"
        alt="home background"
        src={bg}
      />
      <div className="flex flex-col items-center text-center w-3/4 space-y-3 mt-4">
        <h1 className="text-lg md:text-5xl font-bold">
          Welcome to medical – Your First Step Toward Better Health!
        </h1>
        <p className="text-sm md:text-xl font-bold text-[#C4C4C4]">
          We are here to provide you with reliable medical information and
          healthcare services to help you make informed decisions for your
          well-being and that of your loved ones. Because your health is our
          priority, we are with you every step of the way toward a healthier and
          happier life.
        </p>
        <div className=" flex flex-col sm:flex-row items-center gap-6">
          <Link
            className=" w-40 bg-main px-2 py-2 rounded-full text-lg font-bold"
            href="/login"
          >
            login
          </Link>
          <Link
            className=" w-40 bg-main px-2 py-2 rounded-full text-lg font-bold"
            href="/form"
          >
            Form
          </Link>
        </div>
      </div>
    </div>
  );
}
