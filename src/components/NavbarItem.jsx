import { sidebarItems } from "@/utils/constants";
import Link from "next/link";

const NavbarItem = () => {
  return (
    <>
      {sidebarItems?.map((item) => (
        <li className="text-sm" key={item}>
          <Link href={item == "Home"  ? "/" : `/#${item.toLowerCase()}`}>{item}</Link>
        </li>
      ))}
    </>
  );
};

export default NavbarItem;
