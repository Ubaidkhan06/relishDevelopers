import About from "@/components/About";
import { Blog } from "@/components/Blog";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Howwework from "@/components/Howwework";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const blogs = await prisma?.blogs?.findMany();

  // console.log(blogs);

  return (
    <>
    <Navbar>
      <Hero />
      <Howwework/>
      <Services />
      <Testimonials />
      <About />
      <Projects />
      <Blog blogs={blogs || []}/>
      <FAQ />
      <Contact />
      <Footer />
    </Navbar>
    </>
  );
}
