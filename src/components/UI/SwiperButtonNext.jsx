import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children, className }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`btn btn-circle btn-neutral font-semibold btn-outline hover:bg-neutral ${className}`}
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};

export default SwiperButtonNext;
