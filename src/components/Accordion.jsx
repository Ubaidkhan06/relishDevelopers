import { faqData } from "@/utils/constants";

const Accordion = () => {
  return (
    <>
      {faqData?.map((ele, idx) => (
          <div key={idx} className="collapse collapse-arrow bg-base-300 my-4">
            <input type="radio" name="my-accordion-2" />

            <div className="collapse-title text-2xl font-medium">
              <span className="text-primary font-semibold">
                0{idx + 1}. {"    "}
              </span>
              {ele.question}
            </div>
            <div className="collapse-content">
              <p>{ele.answer}</p>
            </div>
          </div>
      ))}
    </>
  );
};

export default Accordion;
