"use client";

import { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const Calendly = () => {
  const [elem, setElem] = useState();

  useEffect(() => {
    const elem = document.getElementById("calendly");
    setElem(elem);
  }, []);

  return (
    <>
      <div className="z-50">
        {!elem ? null : (
          <PopupWidget
          
            text={"Schedule Call with us "}
            color={"#56DCA4"}
            rootElement={elem}
            textColor={"#000"}
            url="https://calendly.com/prajjwal-relish/idea-discussion"
          />
        )}
      </div>
    </>
  );
};

export default Calendly;
