import Image from "next/image";

const HowweworkItem = ({ name, desc, image }) => {
  return (
    <>
      <div className="lg:w-80  min-h-44 p-4 space-y-2">
        <Image src={image} width={40} height={40} alt={name} />
        <h1 className="text-2xl">{name}</h1>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default HowweworkItem;
