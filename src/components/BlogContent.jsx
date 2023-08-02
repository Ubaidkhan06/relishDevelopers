"use client";
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="py-6 text-xl leading-relaxed"
        >
          <h1 className="font-bold text-4xl text-center lg:text-left lg:text-5xl">
            {indBlogData?.title}
          </h1>
          <span>
            Relish Team Posted on{" "}
            {indBlogData?.date && formatDate(indBlogData?.date)}
          </span>
        </motion.div>
        <span>{indBlogData?.content}</span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Image
          src={indBlogData?.image}
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
          alt={indBlogData?.title}
          // className="lg:w-full lg:h-auto img"
        />
      </motion.div>

      <div className="flex flex-col mt-10 w-4/5 items-center text-center">
        {!full ? (
          <>
            <span>
              {indBlogData?.content?.length > 360
                ? indBlogData?.content.substring(0, 360)
                : indBlogData?.content}
            </span>
            <Link href={`/blog/${id}`}>
              <button className="mt-5" style={{ color: "#2405F2" }}>
                Read more
              </button>
            </Link>
          </>
        ) : (
          <>
            <span>{indBlogData?.content}</span>
            <br />
            <div dangerouslySetInnerHTML={{ __html: indBlogData?.html }} />
          </>
        )}
      </div>
    </div>
  );
};
