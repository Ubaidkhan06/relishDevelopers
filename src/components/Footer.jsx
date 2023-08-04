import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div className="flex flex-col items-center justify-center">
        <Image src={"/images/logo2.webp"} width={150} height={150} alt="img" />
        <p>
          Relish Development Solutions
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div className="">
        <span className="footer-title">Services</span>
        <a className="">Web Development</a>
        <a className="">UI/UX design</a>
        <a className="">Python Scripting</a>
        <a className="">MVP Building</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="#about" className="link link-hover">
          About us
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
        <a href="#projects" className="link link-hover">
          Projects
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link href={"/privacypolicy"} className="link link-hover">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
