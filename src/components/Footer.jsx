import Image from "next/image";

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
        <a className="link link-hover">Web Development</a>
        <a className="link link-hover">UI/UX design</a>
        <a className="link link-hover">Python Scripting</a>
        <a className="link link-hover">MVP Building</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
