"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/utils/constants";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="p-4 bg-base-200 mt-12 pb-52"
      >
        <h1 style={{fontSize : "42px"}} className="text-center font-medium lg:mt-16 lg:text-4xl my-2">
          Services that solve problems.
        </h1>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          //   variants={framerContainer}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10 gap-x-16 items-center mt-16"
        >
          {services?.map((ele, idx) => (
            <motion.div
              className="shadow-lg py-4 rounded-3xl w-full md:w-[360px] md:h-[450px] lg:w-[400px] h-min 
              lg:h-96 flex flex-col transition-all ease-in-out items-center 
            gap-6 p-6  duration-300 hover:bg-neutral hover:text-neutral-content hover:-translate-y-4"
              key={ele.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx / 10 + 0.2 }}
            >
              <Image src={ele.image} width={150} height={150} alt={ele.name} />
              <h1 className="text-center text-3xl">{ele.name}</h1>
              <p className="text-center text-lg">{ele.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Services;
