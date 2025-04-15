import Image from "next/image";
import ph from "@/public/cancerPhoto.png";
import Button from "../../_components/Button";
import Link from "next/link";
function page() {
  return (
    <div className="bg-white flex justify-center items-center h-full">
      <div className="flex flex-col items-center space-y-8">
        <Image src={ph} className="w-52 h-52 " />

        <div className=" flex flex-col sm:flex-row  items-center gap-10">
          <p className="text-secondary text-2xl">The Cancer is Malignant</p>
          <p className="text-secondary text-2xl">Confidence Score : 90%</p>
        </div>
        <div className="flex flex-col sm:flex-row   items-center gap-10">
          <p className="text-secondary text-2xl">
            Email : youssefkaram@mail.com
          </p>
          <p className="text-secondary text-2xl">Password : 30304051700555</p>
        </div>
        <div className="flex    justify-between items-center w-full gap-6">
          <Button className="flex-1">
            <Link href="/home">Home</Link>
          </Button>
          <Button className="flex-1">
            <Link href="/home">New Modal</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
