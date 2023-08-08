"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { framerTransition, fromRight } from "@/utils/framerAnimations";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div id="projects" className="bg-base-200 py-12 p-4">
        <h1
          className="text-5xl md:flex md:justify-center md:gap-48  
        md:items-center font-semibold p-6 pt-8 text-center"
        >
          Our Work
        </h1>
        <motion.div
          initial={fromRight.initial}
          whileInView={fromRight.animate}
          transition={framerTransition}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-center gap-8 items-center"
        >
          <div className="block md:hidden w-full space-y-6">
            <Link href={"/projects/bdrm"}>
              <Image
                src={"/images/BDRM/1.webp"}
                width={300}
                height={300}
                alt="BDRM"
                className="h-full w-full object-contain"
              />
            </Link>
            <Link href={"/projects/khonsu"}>
              <Image
                src={"/images/Khonshu/1.webp"}
                width={300}
                height={300}
                alt="BDRM"
                className="h-full w-full object-contain"
              />
            </Link>
            <Link href={"/projects/listen2re"}>
              <Image
                src={"/images/Listen2Re/1.webp"}
                width={300}
                height={300}
                alt="BDRM"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-col md:flex-row justify-center gap-2 h-[500px] w-full p-4">
            <div className="cursor-pointer">
              <Link href={"/projects/bdrm"}>
                <Image
                  src={"/images/BDRM/1.webp"}
                  width={500}
                  height={500}
                  alt="BDRM"
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-between">
              <div className=" w-full md:h-2/5 cursor-pointer">
                <Link href={"/projects/listen2re"}>
                  <Image
                    src={"/images/Listen2Re/1.webp"}
                    width={500}
                    height={500}
                    alt="BDRM"
                    className="h-full w-full"
                  />
                </Link>
              </div>
              <div className=" w-full md:h-2/5 cursor-pointer">
                <Link href={"/projects/khonsu"}>
                  <Image
                    src={"/images/Khonshu/1.webp"}
                    width={500}
                    height={500}
                    alt="BDRM"
                    className="h-full w-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="text-3xl text-secondary text-center pt-8 font-semibold hover:text-warning">
          <Link href={"/projects"}>View all &#8594;</Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
