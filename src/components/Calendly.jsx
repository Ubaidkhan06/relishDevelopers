"use client";

import { useEffect, useState } from "react";
import { PopupWidget, PopupButton } from "react-calendly";

const Calendly = ({ button }) => {
  const [elem, setElem] = useState();

  useEffect(() => {
    const elem = document.getElementById("calendly");
    setElem(elem);
  }, []);

  return (
    <>
      <div className="z-50">
        {!elem ? null : !button ? (
          <PopupWidget
            text={"Schedule Call with us "}
            color={"#FFDE8A"}
            rootElement={elem}
            textColor={"#014E4E"}
            url="https://calendly.com/prajjwal-relish/idea-discussion"
          />
        ) : (
          <PopupButton
            text={"Book A Consultation Call  -->"}
            color={"#FFDE8A"}
            rootElement={elem}
            textColor={"#014E4E"}
            url="https://calendly.com/prajjwal-relish/idea-discussion"
          />
        )}
      </div>
    </>
  );
};

export default Calendly;
