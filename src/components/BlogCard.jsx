import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({ data }) => {


  const formatDate = (date) => {
    const dateString = date;
    const dateObj = new Date(dateString);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      dateObj
    );

    return formattedDate;
  };

  return (
    // <Link href={{
    //   pathname : "/blog",
    //   query : {id : data?.id}
    // }}>
      <div className="lg:w-[400px]">
        <div className="max-w-[405px] max-h-[285px] overflow-hidden">
          <Image
            src={data?.image}
            width={1000}
            height={1000}
            className="object-cover h-96 w-96"
            alt={data?.title}
          />
          <Image
            src={data?.image}
            alt="image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between h-[230px]">
          <div className=" h-[110px]">
            <div className="mt-3">
              <span>{data?.date && formatDate(data?.date)}</span>
            </div>

            <div
              className="mt-4 flex flex-col gap-4  h-[140px]"
              style={{ overflow: "hidden" }}
            >
              <span className="font-bold">{data?.title}</span>
              <p className="content">{data?.content}</p>
            </div>
          </div>

          <div className="read-more">
            <span
              className="flex flex-row items-center align-center gap-3 cursor-pointer font-bold mt-5"
              style={{ color: "#1C1E53" }}
            >
              <Link href={`/blog/${data?.id}`}>Read More</Link>
              <svg
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Arrow 1"
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  fill="#282938"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    // </Link>
  );
};
