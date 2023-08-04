"use client";
import {
  framerTransition,
  fromLeft,
  fromRight,
} from "@/utils/framerAnimations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const BlogContent = ({ indBlogData, id, full }) => {
  const formatDate = (date) => {
    const dateString = date;
    const dateObj = new Date(dateString);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      dateObj
    );

    return formattedDate;
  };

  return (
    <div className="flex flex-col w-4/5 items-center">
      <div className="flex flex-col gap-5 mt-12 mb-5 w-4/5 items-center text-center">
        <motion.div
          initial={fromRight.initial}
          whileInView={fromRight.animate}
          viewport={{ once: true }}
          transition={framerTransition}
          className="py-6 text-xl leading-relaxed"
        >
          <h1 className="font-bold capitalize text-4xl text-center lg:text-left lg:text-5xl">
            {indBlogData?.title}
          </h1>
          <span>
            Relish Team Posted on{" "}
            {indBlogData?.date && formatDate(indBlogData?.date)}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={fromLeft.initial}
        whileInView={fromLeft.animate}
        transition={framerTransition}
        viewport={{ once: true }}
        className="w-full"
      >
        <Image
          src={indBlogData?.image}
          width={1000}
          height={1000}
          alt={indBlogData?.title}
          className="w-full object-contain h-96"
        />
      </motion.div>

      <div className="flex flex-col mt-10 w-4/5 items-center text-center">
        <>
          <span>{indBlogData?.content}</span>
          <br />
          <div dangerouslySetInnerHTML={{ __html: indBlogData?.html }} />
        </>
      </div>
    </div>
  );
};
