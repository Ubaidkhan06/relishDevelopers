"use client";
import { BlogCard } from "./BlogCard";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";

export const BlogSection = ({ data, id }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Filter the data whenever the 'data' prop changes
    setBlogData(data?.filter((item) => item?._id !== id));
  }, [data, id]);

  return (
    <div className="w-full p-2 mt-4">
      <Carousel
        // auto
        data={blogData}
        renderComponent={(data) => (
          <div className="flex flex-row justify-between">
            <BlogCard data={data} />
          </div>
        )}
        size={{ width: "300px" }}
      />
    </div>
  );
};
