"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = ({ name, image, size, description, full }) => {
  const [show, setShow] = useState(false);
  const temp = "w-full";
  return (
    <>
      <div
        className="relative shadow-2xl rounded-3xl transition-all duration-300 ease-linear"
        onMouseEnter={(e) => setShow(true)}
        onMouseLeave={(e) => setShow(false)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`absolute rounded-3xl text-neutral-content ${
            show ? "w-1/2 bg-opacity-75" : "w-0 bg-opacity-0 text-opacity-0"
          } justify-center items-center h-full
             bg-neutral  transition-all transform ease-in-out 
             duration-300 top-0 left-0  
             font-extrabold`}
        >
          <div className="flex flex-col gap-6 h-full justify-center items-center">
            <h1 className="text-2xl">{name}</h1>
            <p className="text-xl">{description}</p>
            <Link href={`/projects/${name?.toLowerCase()}`}>
              <div className="flex gap-4 items-center hover:text-warning cursor-pointer">
                <h1 className="text-lg">View Project</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>
        <div>
          <Image
            src={image}
            width={size}
            height={size}
            alt="image"
            className="object-contain w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
