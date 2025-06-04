import Image from "next/image";
import logo from "@/public/a-flat-vector-lettermark-logo-design-sho_M1U1HI8tTvOIgjZLmcU6eg_gSbp1v7WSyql-yuko9RTsQ-removebg-preview.png";
function NavLogo({ size = "size-32" }) {
  return (
    <div className="flex items-center justify-center ">
      <div className={`relative ${size}`}>
        <Image src={logo} alt="logo" fill />
      </div>
    </div>
  );
}

export default NavLogo;
