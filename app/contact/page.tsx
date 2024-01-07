import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for Business Prokerage.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We are here to listen to your needs and concerns. If you have anything to say, just give us a shout."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
