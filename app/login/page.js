import Image from "next/image";
import bg from "@/public/homeBackGround.png";
import Form from "../_components/Form";
import Input from "../_components/Input";
import Button from "../_components/Button";
import Link from "next/link";

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
      <Form>
        <div className="text-center space-y-3">
          <h2 className=" text-2xl sm:text-4xl font-medium">Log in</h2>
          <p className="text-sm sm:text-base">
            Don’t have an ccount?{" "}
            <Link href="/form" className="text-main underline">
              Fill out the form please{" "}
            </Link>{" "}
          </p>
        </div>
        <Input label="your email" type="email" />
        <Input label="Your password" type="password" />
        <Button className="w-full">Login</Button>
      </Form>
    </div>
  );
}

export default page;
