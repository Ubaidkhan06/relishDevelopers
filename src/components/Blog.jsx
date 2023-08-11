"use client";
import { useState } from "react";
import { BlogCard } from "./BlogCard";
import Carousel from "./Carousel";

export const Blog = ({ blogs }) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      id="blog"
      className="bg-base-100 text-base-content p-6 md:px-20 w-screen flex flex-col items-center"
    >
      <div className="py-6 text-xl leading-relaxed">
        <h1 className="text-center text-xl font-medium lg:text-5xl my-2">
          Our Blog
        </h1>
      </div>

      <div
        onMouseEnter={(e) => setShowButton(true)}
        onMouseLeave={(e) => setShowButton(false)}
        className="w-full p-1"
      >
        <Carousel
          showButton={showButton}
          withButton
          forProject
          loop={true}
          auto
          data={[...blogs, ...blogs]}
          renderComponent={(data) => <BlogCard data={data} />}
        />
      </div>
    </div>
  );
};
