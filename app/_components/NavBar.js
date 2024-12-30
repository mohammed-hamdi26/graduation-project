"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { FaUserCheck, FaUserDoctor } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward, IoMdAlarm } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import NavItem from "./NavItem";

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
  {
    name: "Medication reminder",
    href: "/dashboard/medication-reminder",
    icon: <IoMdAlarm className="h-6 w-6" />,
  },
];

function NavBar({ children }) {
  const path = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const navVariants = {
    open: {
      width: "284.5px",

      transition: { duration: 0.5 },
    },
    closed: {
      width: "105px",

      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.nav
      variants={navVariants}
      animate={isNavOpen ? "open" : "closed"}
      // animate={{ width: isNavOpen ? "fit-content" : "fit-content" }}
      className={`relative  h-full bg-white  space-y-4 transition flex flex-col  `}
    >
      {/* <NavLogo /> */}
      <ul className="space-y-2 flex-1 pt-6 px-4">
        {navLinks.map((link) => (
          <NavItem
            path={path}
            key={link.name}
            link={link}
            isNavOpen={isNavOpen}
          />
        ))}
      </ul>
      <Link href="/dashboard/profile">{children}</Link>
      <button
        className="absolute top-0 -right-[15px] bg-second-main text-white  rounded-full w-7 h-7 flex justify-center items-center z-10"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        {isNavOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
    </motion.nav>
  );
}

export default NavBar;
