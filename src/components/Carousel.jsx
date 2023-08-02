"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const Carousel = ({ data, renderComponent, size }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      modules={[Autoplay]}
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: false,
      // }}
    >
      {data?.map((item, idx) => (
        <SwiperSlide key={idx} style={size}>{renderComponent(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
