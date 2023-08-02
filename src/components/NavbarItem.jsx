import { sidebarItems } from "@/utils/constants";

const NavbarItem = () => {
  return (
    <>
      {sidebarItems?.map((item) => (
        <li className="text-sm" key={item}>
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}
    </>
  );
};

export default NavbarItem;
