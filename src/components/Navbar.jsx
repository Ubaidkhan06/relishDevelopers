import Image from "next/image";
import Link from "next/link";
import NavbarItem from "./NavbarItem";

const Navbar = ({ children }) => {
  return (
    <>
      <div>
        <div className="drawer bg-base-100">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full m-auto navbar bg-neutral lg:px-16 text-neutral-content">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 text-2xl px-2 mx-2">
                <Link href={"/"}>
                  <Image
                    src={"/images/logo2.webp"}
                    width={90}
                    height={90}
                    alt="Relish Logo"
                  />
                </Link>
                Relish
                <span className="hidden xl:block">
                  &nbsp;Development Solutions
                </span>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal items-center">
                  {/* Navbar menu content here */}
                  <NavbarItem />
                  <li className="btn btn-success btn-sm text-success-content">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      Call Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200">
              {/* Sidebar content here */}
              <NavbarItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
