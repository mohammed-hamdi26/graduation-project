import Image from "next/image";
import Link from "next/link";

function ModalBox({ imageSrc, children, href }) {
  return (
    <Link href={href}>
      <div className="flex justify-center items-center rounded-2xl relative h-[290px] overflow-hidden cursor-pointer transition-all duration-700 hover:scale-105">
        <div className="bg-black bg-opacity-40 absolute w-full h-full z-20 backdrop-blur-[5px]"></div>
        <Image src={imageSrc} className="object-cover z-10" fill alt="" />
        <p className="z-30 text-white text-5xl uppercase">{children}</p>
      </div>
    </Link>
  );
}

export default ModalBox;
