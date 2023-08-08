"use client";
import Image from "next/image";
import { useSwiper } from "swiper/react";

const TestimonialComponent = () => {
  const swiper = useSwiper();

  return (
    <div className="space-y-6 mt-4 w-80 lg:w-6/12 lg:mt-0 px-2">
      <p className="text-2xl leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
        consectetur temporibus similique dolores, quis, culpa quaerat, ducimus
        distinctio sunt harum quisquam commodi. 
      </p>
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-16 h-16 rounded-full">
            <Image
              src={"/images/nextjs.svg"}
              width={50}
              height={50}
              alt="logo"
            />
          </div>
          <div>
            <h1>Name </h1>
            <p>About him</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
