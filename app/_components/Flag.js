import Image from "next/image";

function Flag({ src }) {
  return (
    <div className="w-12 h-8  relative overflow-hidden rounded-lg hover:scale-105 transition duration-500 cursor-pointer">
      <Image className=" object-cover" src={src} alt="flag" fill />
    </div>
  );
}

export default Flag;
