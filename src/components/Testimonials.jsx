"use client";
import Carousel from "./Carousel";
import TestimonialComponent from "./TestimonialComponent";

const Testimonials = () => {
  return (
    <div className="bg-base-300 text-base-content w-96 lg:w-full p-6 py-28">
      <div className="flex flex-col lg:flex-row lg:p-8 justify-center  lg:m-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">
            What our clients say about us
          </h1>
          {/* <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p> */}
        </div>
        <div className="w-full">
          <Carousel
            loop={true}
            auto
            data={[1, 2, 3, 4]}
            renderComponent={(data) => <TestimonialComponent />}
            withButton
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
