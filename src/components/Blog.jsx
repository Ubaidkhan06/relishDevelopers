"use client";
import { BlogCard } from "./BlogCard";
import Carousel from "./Carousel";

export const Blog = ({ blogs }) => {
  return (
    <div
      id="blog"
      className="bg-base-100 text-base-content p-6 md:px-32 w-screen flex flex-col items-center"
    >
      <div className="py-6 text-xl leading-relaxed">
        <h1 className="text-center text-3xl lg:text-5xl my-2">Our Blog</h1>
      </div>

      <div className="w-full p-2">
        <Carousel
          // auto
          data={blogs}
          renderComponent={(data) => (
            <div className="flex flex-row justify-between">
              <BlogCard data={data} />
            </div>
          )}
          size={{ width: "300px" }}
        />
      </div>
    </div>
  );
};
