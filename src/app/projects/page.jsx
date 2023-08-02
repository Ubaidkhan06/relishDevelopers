"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const colors = {
    0: "warning",
    1: "error",
    2: "success",
    3: "info",
  };

  const temp = `bg-gradient-to-br from-primaryBlue to-warning 
  bg-gradient-to-br from-primaryBlue to-error 
  bg-gradient-to-br from-primaryBlue to-info 
  bg-gradient-to-br from-primaryBlue to-success`;

  return (
    <div className="bg-base-100">
      <Navbar>
        <div className="bg-base-200  text-center gap-6 py-8 flex flex-col">
          <h1 className="text-xl text-neutral-500">What we created</h1>
          <h1 className="text-5xl">Our Work Portfolio</h1>
          <p className="text-xl lg:w-7/12 m-auto text-neutral-500">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
        </div>
        <div
          className="bg-base-100 p-4 space-y-10 md:space-y-0  md:items-center md:justify-around 
        md:flex md:flex-wrap md:gap-8"
        >
          {projects?.map((ele, idx) => (
            <div className="lg:w-1/3 space-y-4" key={ele.name}>
              <div
                key={ele.name}
                className={`m-auto bg-gradient-to-br from-neutral to-${colors[idx]} py-8 p-6 flex justify-center 
                items-center lg:h-[350px] hover:-translate-y-3 transition-all ease-in-out duration-300`}
              >
                <Image
                  src={ele.image}
                  width={500}
                  height={500}
                  alt={ele.name}
                  className="lg:h-72"
                />
              </div>
              <h2 className="text-2xl font-semibold">{ele.name}</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos id rerum illo quas asperiores nobis ducimus.
              </p>
              <Link href={`/projects/${ele.name.toLowerCase()}`}>
                <button className="btn btn-info btn-sm mt-2">
                  View Portfolio
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
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </Navbar>
    </div>
  );
};

export default Projects;
