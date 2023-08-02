"use client";
import Image from "next/image";
import { useSwiper } from "swiper/react";

const TestimonialComponent = () => {
  const swiper = useSwiper();

  return (
    <div className="space-y-6 mt-4 w-80 lg:w-6/12 lg:mt-0 px-2">
      <p className="text-xl leading-relaxed">
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
        <div className="space-x-4">
          <button
            onClick={() => swiper.slidePrev()}
            className="btn btn-neutral btn-circle btn-outline"
          >
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="btn btn-neutral btn-circle btn-outline"
          >
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
