import { BlogContent } from "@/components/BlogContent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/prisma";

const IndividualBlog = async ({ params: { id } }) => {
  const blogData = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <Navbar>
      <div className="flex flex-col w-full h-full justify-between">
        <div>
          <div className="body flex flex-col items-center mb-10">
            <BlogContent indBlogData={blogData || []} full={true} />
          </div>
        </div>
        <Footer />
      </div>
    </Navbar>
  );
};

export default IndividualBlog;
