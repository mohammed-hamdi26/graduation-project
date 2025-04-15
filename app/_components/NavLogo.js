import Image from "next/image";
import logo from "@/public/Retro_Dazle_Night_Club_Logo-removebg-preview.png";
function NavLogo() {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative size-32">
        <Image src={logo} alt="logo" fill />
      </div>
    </div>
  );
}

export default NavLogo;
