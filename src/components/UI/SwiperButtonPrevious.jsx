import { useSwiper } from "swiper/react";

const SwiperButtonPrevious = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className="btn btn-circle btn-neutral font-semibold btn-outline hover:bg-neutral"
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};

export default SwiperButtonPrevious;
