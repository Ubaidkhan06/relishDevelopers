"use client";
import Image from "next/image";
import { useId, useRef } from "react";

const Temp = ({ item }) => {
  const ref = useRef(null);
  const id = useId()

  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button className="" onClick={() => ref?.current?.showModal()}>
        <Image
        priority
          src={item}
          alt="img"
          width={400}
          height={400}
          className="lg:h-80 object-cover w-64 h-56 lg:w-96 rounded-2xl drop-shadow-lg"
        />
      </button>
      <dialog ref={ref} id={id} className="modal ">
        <form method="dialog" className="modal-box p-1 max-w-3xl">
          <Image
            src={item}
            alt="img"
            width={1000}
            height={1000}
            className="w-full h-full rounded-2xl"
          />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Temp;
