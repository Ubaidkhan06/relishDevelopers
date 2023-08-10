"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Carousel from "../Carousel";
import Temp from "./Temp";

const ProjectsCarousel = ({ data }) => {
  const [showButton, setShowButton] = useState(false);
  const ref = useRef(null);

  return (
    <div
      onMouseEnter={(e) => setShowButton(true)}
      onMouseLeave={(e) => setShowButton(false)}
      className="bg-gradient-to-br  from-[#fff1eb] h-max to-[#ace0f9] p-4"
    >
      <Carousel
        showButton={showButton}
        setShowButton={setShowButton}
        data={data?.images}
        withButton
        forProject
        renderComponent={(item) => (
          <>
            <Temp item={item} />
          </>
        )}
      />
    </div>
  );
};

export default ProjectsCarousel;
