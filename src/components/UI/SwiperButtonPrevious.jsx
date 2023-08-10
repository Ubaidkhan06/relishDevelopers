import { useSwiper } from "swiper/react";

const SwiperButtonPrevious = ({ children, className }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`btn btn-circle btn-neutral ${className} font-semibold btn-outline hover:bg-neutral`}
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};

export default SwiperButtonPrevious;
