"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  framerContainer,
  framerItem,
  framerTransition,
  fromLeft,
  fromRight,
} from "@/utils/framerAnimations";
import { arrTools, tempContent } from "@/utils/constants";
import TechSection from "./TechSection";

const About = () => {
  return (
    <div
      id="about"
      className="bg-base-100 flex flex-col justify-center items-center p-4 py-24 gap-12"
    >
      {/* section1 */}
      <div className="lg:flex lg:justify-center space-y-6">
        <motion.div
          initial={fromLeft.initial}
          whileInView={fromLeft.animate}
          viewport={{ once: true }}
          transition={framerTransition}
          className="lg:w-[60vw] space-y-6"
        >
          <h1 className=" text-2xl">About us</h1>
          <h1 className="text-3xl  font-semibold">
            Our designs solves problems.
          </h1>
          <p className="text-xl lg:w-[50vw]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            iste similique nisi maiores ut, placeat reiciendis, recusandae
            commodi ab vitae accusamus sequi itaque, 4ad explicabo alias
            voluptatum inventore sit necessitatibus.
          </p>
        </motion.div>
        <motion.div
          initial={fromRight.initial}
          whileInView={fromRight.animate}
          viewport={{ once: true }}
          transition={framerTransition}
        >
          <Image
            src={"/images/about-us.webp"}
            width={500}
            height={500}
            alt="image"
            className="rounded-3xl"
          />
        </motion.div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}
      {/* section2 */}
      <div className="bg-base-200 w-screen space-y-6 px-6 lg:px-14 py-12">
        <div className="lg:flex lg:gap-4 lg:items-center">
          <motion.div
            initial={fromLeft.initial}
            whileInView={fromLeft.animate}
            viewport={{ once: true }}
            transition={framerTransition}
            className="lg:w-1/2"
          >
            <h1 className="text-2xl font-sans  underline-offset-2 underline text-secondary text-center lg:text-left">
              Who we are
            </h1>
            <h1 className="text-3xl my-4 font-semibold text-center lg:text-left">
              Goal Focused
            </h1>
            <p className="lg:text-xl  lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              illum enim. Expedita aspernatur officiis minima quae cum facilis
              recusandae numquam, ex nostrum, earum saepe nam quisquam ab,
              voluptates placeat accusamus!
            </p>
          </motion.div>
          <motion.div
            initial={fromRight.initial}
            whileInView={fromLeft.animate}
            viewport={{ once: true }}
            transition={framerTransition}
            className="lg:w-1/2 mt-4"
          >
            <h1 className="text-3xl my-4 font-semibold text-center lg:text-left">
              Continuous Improvement
            </h1>
            <p className="lg:text-xl lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              illum enim. Expedita aspernatur officiis minima quae cum facilis
              recusandae numquam, ex nostrum, earum saepe nam quisquam ab,
              voluptates placeat accusamus!
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Image
            src={"/images/who-we-are.webp"}
            width={1000}
            height={1000}
            alt="image"
            className="mt-2 w-full h-96 object-cover rounded-3xl"
          />
        </motion.div>
      </div>
      {/* --------------------------------------------------------------------------------------- */}

      {/* section3 */}
      <div className="w-[90vw] py-20 m-auto">
        <motion.h1
          initial={fromRight.initial}
          whileInView={fromRight.animate}
          viewport={{ once: true }}
          transition={framerTransition}
          style={{ fontSize: "42px" }}
          className="font-medium text-center"
        >
          The Process we follow
        </motion.h1>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={framerContainer}
          className="flex flex-col lg:flex-row justify-center py-18 gap-6 mt-12"
        >
          {tempContent?.map((ele) => (
            <motion.div
              key={ele.title}
              variants={framerItem}
              className="flex flex-col gap-2 justify-center items-center text-center lg:text-left lg:items-start"
            >
              <div className="h-6 flex">
                <span className="w-6 h-6 rounded-full bg-secondary"></span>
                <span>----------------------------------</span>
              </div>

              <h1 className="text-2xl">{ele.title}</h1>
              <p className="text-lg">{ele.data}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* ------------------------------------------------------------------------------------ */}
      </div>

      {/* section4 */}
      <div className="bg-base-200 mt-24 w-screen p-4 lg:px-20 lg:py-20">
        <div className=" lg:flex space-x-4 lg:justify-between">
          <motion.div
            initial={fromLeft.initial}
            whileInView={fromLeft.animate}
            viewport={{ once: true }}
            transition={framerTransition}
            className="space-y-4 "
          >
            <h1 className="text-2xl text-secondary underline ">Our Mission</h1>
            <h1 className="text-3xl font-semibold">Inspire, Innovate, Share</h1>
            <p className="lg:w-[600px] text-xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              eveniet ipsum blanditiis enim ipsam est, rerum qui fugiat quos
              perspiciatis nobis, id mollitia repudiandae modi itaque
              praesentium. Consequatur, ea porro?
            </p>
          </motion.div>
          <motion.div
            initial={fromRight.initial}
            whileInView={fromRight.animate}
            viewport={{ once: true }}
            transition={framerTransition}
          >
            <Image
              src={"/images/our-mission.webp"}
              width={500}
              height={500}
              alt="image"
              className="w-full lg:w-[500px] lg:h-auto rounded-3xl"
            />
          </motion.div>
        </div>
        <div className="mt-8 lg:flex space-x-4 lg:flex-row-reverse lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 "
          >
            <h1 className="text-2xl text-secondary underline underline-offset-2">
              Our Vision
            </h1>
            <h1 className="text-3xl font-semibold">Laser Focus</h1>
            <p className="lg:w-[600px] text-xl lg:text-2xl md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              eveniet ipsum blanditiis enim ipsam est, rerum qui fugiat quos
              perspiciatis nobis, id mollitia repudiandae modi itaque
              praesentium. Consequatur, ea porro?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[500px] lg:h-auto"
          >
            <Image
              src={"/images/our-vision.webp"}
              width={500}
              height={500}
              alt="image"
              className="w-full h-auto mt-2 rounded-3xl "
            />
          </motion.div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}
      {/* section 5 */}
      <div className="p-2 w-[95vw] m-auto">
        <h1
          style={{ fontSize: "42px" }}
          className="font-medium text-center mt-6"
        >
          Technologies we use
        </h1>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          // variants={framerContainer}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-evenly mt-8"
        >
          {arrTools?.map((ele, idx) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx / 10 + 0.2 }}
              key={idx}
            >
              <TechSection tech={ele.arr} title={ele.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
