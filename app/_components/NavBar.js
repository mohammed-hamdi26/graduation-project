"use client";

import Link from "next/link";
import NavLogo from "./NavLogo";
import { FaUserCheck, FaUserDoctor } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { IoDocumentTextOutline } from "react-icons/io5";

const navLinks = [
  {
    name: "home",
    href: "/dashboard/home",
    icon: <HiOutlineHome className="h-6 w-6" />,
  },
  {
    name: "doctors",
    href: "/dashboard/doctors",
    icon: <FaUserDoctor className="h-6 w-6" />,
  },
  {
    name: "medical history",
    href: "/dashboard/medical-history",
    icon: <FaHistory className="h-6 w-6" />,
  },
  {
    name: "check yourself",
    href: "/dashboard/check-yourself",
    icon: <FaUserCheck className="h-6 w-6" />,
  },
  {
    name: "result",
    href: "/dashboard/result",
    icon: <IoDocumentTextOutline className="h-6 w-6" />,
  },
];

function NavBar() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className="h-full bg-white p-8 space-y-4">
      <NavLogo />
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`${
              path === link.href
                ? "bg-second-main bg-opacity-20 text-second-main hover:bg-opacity-30"
                : "text-[#64748B] hover:bg-gray-200"
            } w-full px-4 py-3 rounded-full transition-[background-color] duration-500 `}
          >
            <Link href={link.href} className="flex items-center gap-2">
              {link.icon}
              <span className="font-medium capitalize">{link.name}</span>
            </Link>
          </li>
        ))}
        {/* <li className="bg-second-main bg-opacity-20 text-second-main w-full px-4 py-3 rounded-full">
          <Link href="/dashboard/home" className="flex items-center gap-2">
            <HiOutlineHome className="h-6 w-6" />
            <span className="font-medium capitalize">home</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
