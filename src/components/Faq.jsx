import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <>
      <div className="bg-base-200 flex justify-center items-center flex-col lg:flex-row  p-4 lg:p-16 ">
        <div className="lg:w-[35vw]">
          <h1 className="text-3xl text-center lg:text-left lg:text-5xl">
            Frequently asked questions
          </h1>
          <p className="font-semibold text-center lg:text-left mt-4 text-lg text-success">
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
