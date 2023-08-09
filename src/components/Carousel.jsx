"use client";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import SwiperButtonNext from "./UI/SwiperButtonNext";
import SwiperButtonPrevious from "./UI/SwiperButtonPrevious";


const Carousel = ({ data, renderComponent, size, withButton, loop, }) => {
  const swiper = useSwiper();

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      modules={[Autoplay, Navigation]}
      navigation={!withButton}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={loop}
    >
      {data?.map((item, idx) => (
        <SwiperSlide key={idx} style={size}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
      {withButton ? (
        <div className="flex justify-end gap-6">
          <SwiperButtonPrevious>
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
          <SwiperButtonNext className={""}>
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
