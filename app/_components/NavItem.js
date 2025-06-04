import { useLocale } from "next-intl";
import Link from "next/link";

function NavItem({ link, path, isNavOpen, t }) {
  const locale = useLocale();
  return (
    <li
      key={link.name}
      className={`${
        String(path).trim() == String(link.href).trim() ||
        path.includes(link.href)
          ? `bg-second-main bg-opacity-30 text-second-main hover:bg-opacity-30 ${
              locale == "ar"
                ? "border-l-4 border-l-second-main"
                : "border-r-4 border-r-second-main"
            } `
          : "text-[#64748B] hover:bg-gray-200"
      }  px-4 py-3  transition-[background-color] duration-500 rounded-md `}
    >
      <Link href={link.href} className="flex  items-center gap-2">
        {link.icon}
        {isNavOpen && (
          <span className=" hidden md:block capitalize font-medium text-xl">
            {t(link.name)}
          </span>
        )}
      </Link>
    </li>
  );
}

export default NavItem;
