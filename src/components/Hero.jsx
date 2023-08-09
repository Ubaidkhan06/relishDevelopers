"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  framerTransition,
  fromLeft,
  fromRight,
} from "@/utils/framerAnimations";
import Link from "next/link";
import Calendly from "./Calendly";

const Hero = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Building Stellar website for early startups"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index]);

  return (
    <>
      <div className="hero min-h-screen bg-neutral text-neutral-content">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.div
            initial={fromRight.initial}
            whileInView={fromRight.animate}
            transition={framerTransition}
            viewport={{ once: true }}
            whileHover={{ translateY: -30 }}
          >
            <Image
              src={"/images/planning.svg"}
              width={700}
              height={700}
              alt="hero-image"
              className="rounded-2xl shadow-xl"
              priority
            />
          </motion.div>
          <div>
            <h1 className="text-5xl font-bold">{text}</h1>
            <motion.p
              initial={fromLeft.initial}
              animate={fromLeft.animate}
              transition={framerTransition}
              className="py-6"
              viewport={{ once: true }}
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </motion.p>
            <motion.button
              initial={fromLeft.initial}
              animate={fromLeft.animate}
              transition={framerTransition}
              viewport={{ once: true }}
              className="btn btn-warning flex text-primary btn-block lg:w-fit hover:bg-[#ffd15e]"
            >
              {/* <Link  href={"#contact"}>Book a consultation call</Link>
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
              </span> */}
              <Calendly button />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
