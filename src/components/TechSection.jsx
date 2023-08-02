import Image from "next/image";

const TechSection = ({ tech, title }) => {
  return (
    <div className=" p-4 ">
      <h1 className="text-center text-3xl">{title}</h1>
      <div className="flex gap-4 flex-wrap justify-center mt-4">
        {tech?.map((ele) => (
          <div
            key={ele.name}
            className="flex cursor-pointer flex-col items-center h-28 md:h-32 
            justify-evenly text-center shadow-xl w-28 md:w-28 p-2 
            rounded-3xl hover:bg-neutral hover:text-neutral-content hover:-translate-y-2 
            transition-all ease-in-out duration-300"
          >
            <Image src={ele.image} width={40} height={40} alt={ele.name} />
            <h1 className="text-lg ">{ele.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSection;
