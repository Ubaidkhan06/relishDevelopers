"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperButtonNext from "./UI/SwiperButtonNext";
import SwiperButtonPrevious from "./UI/SwiperButtonPrevious";

const Carousel = ({
  data,
  renderComponent,
  size,
  withButton,
  loop,
  forProject,
  showButton,
}) => {
  const temp = "justify-end justify-between";

  return (
    <Swiper spaceBetween={30} slidesPerView={"auto"} loop={loop}>
      {data?.map((item, idx) => (
        <SwiperSlide key={idx} style={size}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
      {withButton ? (
        <div
          className={`flex justify-${
            forProject ? "between" : "end"
          } overflow-visible gap-6`}
        >
          <SwiperButtonPrevious
            className={`${
              forProject
                ? `absolute bg-gray-400 border-0 hover:bg-gray-400 ${
                    showButton ? "flex" : "hidden"
                  } left-0 top-2/4 z-50`
                : null
            }`}
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </SwiperButtonPrevious>
          <SwiperButtonNext
            className={`${
              forProject
                ? `absolute  bg-gray-400 border-0 hover:bg-gray-400 ${
                    showButton ? "flex" : "hidden"
                  } right-0 top-2/4 z-50`
                : null
            }`}
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </SwiperButtonNext>
        </div>
      ) : null}
    </Swiper>
  );
};

export default Carousel;
