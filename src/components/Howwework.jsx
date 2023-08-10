"use client";
import { motion } from "framer-motion";
import { howWeWork } from "@/utils/constants";
import {
  framerContainer,
  framerItem,
  framerTransition,
  fromLeft,
} from "@/utils/framerAnimations";

import HowweworkItem from "./HowweworkItem";
import Link from "next/link";



const Howwework = () => {
  return (
    <>
      <div
        className=" p-3 lg:flex lg:gap-4 
        lg:items-center lg:w-[90vw] lg:m-auto space-y-4 py-14"
      >
        <motion.div
          initial={fromLeft.initial}
          whileInView={fromLeft.animate}
          transition={framerTransition}
          viewport={{ once: true }}
          className="lg:w-2/3 p-4 h-min space-y-3"
        >
          <h1 className="text-4xl font-semibold">How we work ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptatem animi nisi sed consequuntur illo ipsa, minus et omnis
            corporis harum deserunt reiciendis aliquam atque illum tempora?
            Libero, nisi inventore.
          </p>
          <Link
            href={"#contact"}
            className="btn btn-warning capitalize text-lg text-primary btn-block hover:bg-[#ffd15e]"
          >
            Get in touch
            <span>
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
          </Link>
        </motion.div>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          variants={framerContainer}
          viewport={{ once: true }}
          className="p-4 space-y-3 gap-4 lg:items-center lg:flex lg:flex-wrap lg:justify-center lg:3/5"
        >
          {howWeWork?.map((ele, idx) => (
            <motion.div
              variants={framerItem}
              key={idx}
              viewport={{ once: true }}
            >
              <HowweworkItem {...ele} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Howwework;
