"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectSection from "./ProjectSection";

const Projects = () => {
  return (
    <>
      <div className="bg-base-200 pb-8 pt-12">
        <h1 className="text-4xl p-6 pt-8 flex justify-around items-center gap-24 text-center">
          View Our Projects{" "}
          <span className="text-xl flex items-center gap-4 hover:text-warning">
            <Link href={"/projects"}>View all</Link>
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
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-center gap-8 items-center"
        >
          <ProjectSection
          full
            image={"/images/Biovatika/1.png"}
            size={600}
            name={"BioVatika"}
            description={"An Ecommerce website that sells beauty products."}
          />
          <div className="flex flex-col gap-8">
            <div className="hidden lg:block">
              <ProjectSection
                image={"/images/BDRM/2.png"}
                size={300}
                name={"Khonsu"}
                
              />
            </div>
            <div className="lg:hidden">
              <ProjectSection
                image={"/images/BDRM/2.png"}
                size={500}
                name={"BDRM"}
              />
            </div>
            <div>
              <ProjectSection
                image={"/images/BDRM/1.png"}
                size={300}
                name={"BDRM"}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
