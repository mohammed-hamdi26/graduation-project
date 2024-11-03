import Image from "next/image";
import Form from "../_components/Form";
import Link from "next/link";

import Button from "../_components/Button";
import bg from "@/public/homeBackGround.png";
import Input from "../_components/Input";
import FormRow from "../_components/FormRow";

export default function page() {
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
          <h2 className="text-4xl font-medium">complete the form</h2>
          <p>
            Already have an ccount?{" "}
            <Link href="/login" className="text-main underline">
              Log in{" "}
            </Link>{" "}
          </p>
        </div>
        <FormRow>
          <Input label="First Name" type="text" />
          <Input label="National ID" type="text" />
        </FormRow>
        <Input label="your email" type="email" />
        <FormRow>
          <Input label="age" />
          <Input label="Choronic disease" />
        </FormRow>
        <div className="flex items-center justify-between">
          <Link href="/login" className="underline text-lg ">
            log in instead
          </Link>
          <Button>create account</Button>
        </div>
      </Form>
    </div>
  );
}
