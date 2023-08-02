import { BlogContent } from "@/components/BlogContent";
import { BlogSection } from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/prisma";

const Blog = async ({ searchParams }) => {
  const id = searchParams?.id || null;

  const data = await prisma.blog.findMany();
  const indBlogData = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  });
  return (
    <Navbar>
      <div className="flex flex-col w-full">
        <div className="body flex flex-col items-center">
          {id ? <BlogContent indBlogData={indBlogData || []} id={id} /> : null}

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
