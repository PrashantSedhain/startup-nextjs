import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We are a dedicated team passionate about delivering innovative solutions, providing exceptional experiences, and empowering businesses to thrive in the digital landscape.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a dedicated team passionate about delivering innovative solutions, providing exceptional experiences, and empowering businesses to thrive in the digital landscape."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
