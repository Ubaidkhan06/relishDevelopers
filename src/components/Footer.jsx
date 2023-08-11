import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-base text-neutral-content pb-24">
      <Link href={"/"} className="flex flex-col items-center justify-center">
        <Image
          src={"/images/logo3.svg"}
          width={150}
          height={150}
          alt="img"
          className=""
        />
        <p className="text-center">
          Relish Development Solutions
          <br />
          Providing reliable tech since 2018
        </p>
      </Link>
      <div className="">
        <span className="footer-title">Services</span>
        <a className="capitalize">Web Development</a>
        <a className="capitalize">UI/UX design</a>
        <a className="capitalize">Python Scripting</a>
        <a className="capitalize">MVP Building</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="#about" className="link link-hover capitalize">
          About us
        </a>
        <a href="#contact" className="link link-hover capitalize">
          Contact
        </a>
        <a href="/projects" className="link link-hover capitalize">
          Projects
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link href={"/privacypolicy"} className="link link-hover capitalize">
          Privacy policy
        </Link>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <div>
          <Link
            className="text-base flex gap-2"
            href={"mailto:sales@relishdevelopers.com"}
          >
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            relishdevelopers@gmail.com
          </Link>
        </div>
        <Link className="text-base flex gap-2" href={"tel:+91 7565981836"}>
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
          +91 75659 81836
        </Link>
        <div className="text-base flex gap-2">
          {" "}
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
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Greater Noida, IN
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link
            target={"_blank"}
            href={"https://www.linkedin.com/company/relishdevelopers/"}
          >
            <Image
              src={"/images/linkedin.png"}
              width={40}
              height={40}
              alt="linkedin"
            />
          </Link>
          <Link
            target={"_blank"}
            href={
              "https://instagram.com/official_relishdevelopment?igshid=MzRlODBiNWFlZA=="
            }
          >
            <Image
              src={"/images/instagram.png"}
              width={40}
              height={40}
              alt="linkedin"
            />
          </Link>
          <Link href={"https://www.facebook.com"} target="_blank">
            <Image
              src={"/images/facebook.png"}
              width={40}
              height={40}
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
