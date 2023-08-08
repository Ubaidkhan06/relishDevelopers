import { sidebarItems } from "@/utils/constants";
import Link from "next/link";

const NavbarItem = ({ toggle }) => {
  return (
    <>
      {sidebarItems?.map((item) => (
        <li
          className="text-sm focus-within:shadow-xl"
          key={item}
        >
          <Link
          className="!text-[#BBDADA] focus-within:text-error"
            onClick={(e) => (toggle ? toggle() : null)}
            href={item == "Home" ? "/" : `/#${item.toLowerCase()}`}
          >
            {item}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavbarItem;
