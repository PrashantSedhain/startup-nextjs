import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is Pricing Page for Business Proker.",
  // other metadata
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing Page"
        description="We provide several pricing plans that fit your needs."
      />
      <Pricing />
    </>
  );
};

export default PricingPage;
