import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import HEALTH from "@/src/queries/getHealth";

export const metadata: Metadata = {
  title: "Business Prokerage",
  description:
    "Unlock the full potential of your business brokerage with Business Prokerage. Designed specifically for brokers, our platform automates critical tasks such as NDA signatures, leverages AI for optimized business listings, and provides direct access to verified investors. Streamline your workflow, increase efficiency, and seize new opportunities for growth. Experience the transformative power of our technology and revolutionize your brokerage operations today.",
};

const query = gql`
  query {
    health
  }
`;

const getData = async () => {
  const data = await fetch("http://localhost:4000/exp/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query.loc.source.body }),
  });
  return data.json();
};

export default async function Home() {
  const data = await getData();
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
