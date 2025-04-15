"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHistory, FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaUserCheck, FaUserDoctor } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdAlarm,
  IoMdPhotos,
} from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import { useLocale, useTranslations } from "next-intl";

function NavBar({ children, user }) {
  const local = useLocale();
  const navLinks = [
    {
      name: "home",
      href: `/${local}/dashboard/home`,
      icon: <HiOutlineHome className="h-6 w-6" />,
      typePath: "both",
    },
    {
      name: "doctors",
      href: `/${local}/dashboard/doctors`,
      icon: <FaUserDoctor className="h-6 w-6" />,
      typePath: "patient",
    },
    {
      name: "patients",
      href: `/${local}//dashboard/patients`,
      icon: <FaRegUser className="h-6 w-6" />,
      typePath: "doctor",
    },
    {
      name: "medical history",
      href: `/${local}/dashboard/medical-history`,
      icon: <FaHistory className="h-6 w-6" />,
      typePath: "patient",
    },
    {
      name: "check yourself",
      href: `/${local}/dashboard/check-yourself`,
      icon: <FaUserCheck className="h-6 w-6" />,
      typePath: "both",
    },
    {
      name: "result",
      href: `/${local}/dashboard/result`,
      icon: <IoDocumentTextOutline className="h-6 w-6" />,
    },
    {
      name: "Medication reminder",
      href: `/${local}/dashboard/medication-reminder `,
      icon: <IoMdAlarm className="h-6 w-6" />,
      typePath: "patient",
    },
    {
      name: "cancer-photos",
      href: `/${local}/dashboard/cancer-photos`,
      icon: <IoMdPhotos className="h-6 w-6" />,
      typePath: "both",
    },
    {
      name: "contact us",
      href: `/${local}/dashboard/contact-us`,
      icon: <FaPhone className="h-6 w-6" />,
      typePath: "both",
    },
  ];
  const t = useTranslations("nav");
  const path = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const navVariants = {
    open: {
      width: "284.5px",

      transition: { duration: 0.5 },
    },
    closed: {
      width: "90px",

      transition: { duration: 0.5 },
    },
  };

  const filteredNavLinks = user?.staff
    ? navLinks.filter(
        (link) => link.typePath === "both" || link.typePath === "doctor"
      )
    : navLinks.filter(
        (link) => link.typePath === "both" || link.typePath === "patient"
      );
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth <= 769) {
        setIsNavOpen(false);
      }
    });
  }, []);
  return (
    <motion.nav
      variants={navVariants}
      animate={isNavOpen ? "open" : "closed"}
      className={`relative  h-full bg-white  space-y-4 transition flex flex-col  `}
    >
      <NavLogo />
      <ul className="space-y-2 flex-1  px-4">
        {filteredNavLinks.map((link) => (
          <NavItem
            t={t}
            path={path}
            key={link.name}
            link={link}
            isNavOpen={isNavOpen}
          />
        ))}
      </ul>
      <Link href={`/${local}/dashboard/profile`}>{children}</Link>
      <button
        className={`absolute hidden top-0 ${
          local === "ar" ? "-left-[15px]" : "-right-[15px]"
        }  bg-second-main text-white  rounded-full w-7 h-7 md:flex justify-center items-center z-10`}
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
