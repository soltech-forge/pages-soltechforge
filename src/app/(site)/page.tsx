import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Soltech Forge",
  description: "Specialized in crafting innovative solutions for everyday life.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Products />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Blog />
    </main>
  );
}
