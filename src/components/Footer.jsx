import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content pb-24">
      <Link href={"/"} className="flex flex-col items-center justify-center">
        <Image src={"/images/logo3.svg"} width={150} height={150} alt="img" className="" />
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
        <a href="#projects" className="link link-hover capitalize">
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
            className="text-base"
            href={"mailto:sales@relishdevelopers.com"}
          >
            relishdevelopers@gmail.com
          </Link>
        </div>
        <Link className="text-base" href={"tel:+91 7565981836"}>
          +91 75659 81836
        </Link>
        <div className="text-base">Greater Noida, IN</div>
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
