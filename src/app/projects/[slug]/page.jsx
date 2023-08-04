"use client";
import {
  bdrm,
  biovatikaData,
  khonsu,
  listen2re,
  projects,
  urllistner,
} from "../../../utils/constants";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// !generating static params.
export async function generateStaticParams(context) {
  return projects.map((project) => ({
    slug: project.name.toLowerCase(),
  }));
}

const IndividualProject = ({ params: { slug } }) => {
  const data =
    slug == "khonsu"
      ? khonsu
      : slug == "listen2re"
      ? listen2re
      : slug == "bdrm"
      ? bdrm
      : decodeURI(slug) == "url listner"
      ? urllistner
      : biovatikaData;

  return (
    <Navbar>
      <div className="bg-base-100 p-6 lg:p-16 space-y-6">
        <h1 className="text-2xl">Web design and development</h1>
        <h1 className="text-4xl">{data?.name}</h1>
        <p className="text-lg">{data?.about}</p>
        <div className="bg-gradient-to-br from-warning h-max to-error p-4">
          <Carousel
            data={data?.images}
            renderComponent={(data) => (
              <Image
                src={data}
                alt="img"
                width={400}
                height={400}
                className="lg:h-80 object-cover w-64 h-56 lg:w-96 rounded-2xl drop-shadow-lg"
              />
            )}
          />
        </div>

        <div className="lg:flex-row flex flex-wrap text-center gap-6 lg:text-left justify-around">
          <div>
            <h1 className="text-3xl">Client</h1>
            <h3 className="text-xl">XYZ</h3>
          </div>
          <div>
            <h1 className="text-3xl">Service</h1>
            <h3 className="text-xl">Product Design</h3>
          </div>
          <div>
            <h1 className="text-3xl">Deliverable</h1>
            <h3 className="text-xl">UI Screens, UX Flow & Prototype</h3>
          </div>
        </div>
        <hr />
        <div className="space-y-4 lg:px-32 py-16">
          <h1 className="text-3xl lg:mt-4">About the Project</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste
            atque suscipit impedit delectus eum beatae, provident ratione
            repellendus sint voluptates possimus esse reprehenderit,
            exercitationem placeat consectetur in minima voluptatibus.
          </p>
          <ul className="space-y-2 px-6 text-lg list-disc">
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nisi, ab mollitia eaque aliquam.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nisi, ab mollitia eaque aliquam.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nisi, ab mollitia eaque aliquam.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nisi, ab mollitia eaque aliquam.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </Navbar>
  );
};

export default IndividualProject;
