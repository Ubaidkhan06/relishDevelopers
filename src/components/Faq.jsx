import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <>
      <div className="bg-base-300 flex justify-center items-center flex-col lg:flex-row  p-4 lg:p-16 ">
        <div className="lg:w-[35vw]">
          <h1 className="text-4xl font-semibold text-center lg:text-left">
            Frequently asked questions
          </h1>
          <p className="font-semibold text-center lg:text-left mt-4 text-lg text-primary">
            Contact Us for more detail
          </p>
        </div>
        <div className="lg:w-[50vw]">
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default FAQ;
