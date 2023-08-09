import { sidebarItems } from "@/utils/constants";
import Link from "next/link";

const NavbarItem = ({ toggle, sidebar }) => {
  const textSize = sidebar ? "text-lg" : "text-sm";

  return (
    <>
      {sidebarItems?.map((item) => (
        <li className={`${textSize} focus-within:shadow-xl`} key={item}>
          <Link
            className={` ${
              sidebar ? "!text-neutral" : "!text-[#BBDADA]"
            } focus-within:text-error`}
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
