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
import ProjectsCarousel from "@/components/UI/ProjectsCarousel";

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
      <div className="bg-base-100 p-6 lg:p-14 space-y-6">
        {/* <h1 className="text-2xl text-[#265547] underline underline-offset-8 decoration-gradient">Web design and development</h1> */}
        <div class="relative">
          <span class="text-2xl font-bold capitalize">Web design and development</span>
          <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#014e4e] via-transparent to-transparent"></span>
        </div>

        <h1 className="text-4xl">{data?.name}</h1>
        <p className="text-lg">{data?.about}</p>
        <ProjectsCarousel data={data} />

        <div className="lg:flex-row flex flex-wrap text-center gap-6 lg:text-left justify-around">
          <div>
            <h1 className="text-xl">Client</h1>
            <h3 className="text-2xl">XYZ</h3>
          </div>
          <div>
            <h1 className="text-xl">Service</h1>
            <h3 className="text-2xl">Product Design</h3>
          </div>
          <div>
            <h1 className="text-xl">Deliverable</h1>
            <h3 className="text-2xl">UI Screens, UX Flow & Prototype</h3>
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
