import Link from "next/link";

function NavItem({ link, path, isNavOpen }) {
  return (
    <li
      key={link.name}
      className={`${
        path === link.href || path.includes(link.href)
          ? "bg-second-main bg-opacity-20 text-second-main hover:bg-opacity-30"
          : "text-[#64748B] hover:bg-gray-200"
      }  px-4 py-3 rounded-full transition-[background-color] duration-500 `}
    >
      <Link href={link.href} className="flex items-center gap-2">
        {link.icon}
        {isNavOpen && (
          <span className="font-medium capitalize">{link.name}</span>
        )}
      </Link>
    </li>
  );
}

export default NavItem;
