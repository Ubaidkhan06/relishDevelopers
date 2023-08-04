import { BlogContent } from "@/components/BlogContent";
import { BlogSection } from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/prisma";

const Blog = async () => {
  // !get all the values from the database
  const data = await prisma.blogs.findMany();

  return (
    <Navbar>
      <div className="flex flex-col w-full">
        <div className="body flex flex-col items-center">
          <div className="bg-base-100 text-base-content p-6 w-screen flex flex-col items-center mt-24">
            <h1 className="text-center text-3xl lg:text-5xl my-2">Our Blog</h1>

            <BlogSection data={data} id={id} />
          </div>
        </div>
        <Footer />
      </div>
    </Navbar>
  );
};

export default Blog;
