"use client";
import { useState } from "react";
import { isEmail } from "validator";
import NewsLatterBox from "./NewsLatterBox";
import SEND_FEEDBACK from "@/src/mutation/send_feedback";
import { Response } from "@/src/generated/graphql";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  async function sendFeedback(email: string, name: string, message: string) {
    const url = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your GraphQL endpoint URL

    const requestBody = {
      query: SEND_FEEDBACK,
      variables: {
        email,
        name,
        message,
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      const result = responseData["data"]["feedback"] as Response;

      if (result.success) {
        toast({
          title: "Success",
          description: "Your message has been sent!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setEmail("");
        setMessage("");
        setName("");
      } else {
        toast({
          title: "Failed",
          description: result.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
      throw new Error("Failed to send the message");
    }
  }

  const handleSendFeedback = async () => {
    if (name === "") {
      setNameError("Name cannot be empty");
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Email cannot be empty");
    } else if (!isEmail(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }

    if (message === "") {
      setMessageError("Message cannot be empty");
    } else {
      setMessageError("");
    }

    if (nameError || emailError || messageError) {
      return;
    }
    await sendFeedback(email, name, message);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Want to discuss? Drop us a message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="name"
                        placeholder="Enter your name"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {nameError ? (
                        <p
                          style={{ color: "red" }}
                          className="text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25"
                        >
                          {nameError}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {emailError ? (
                        <p
                          style={{ color: "red" }}
                          className="text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25"
                        >
                          {emailError}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                      {messageError ? (
                        <p
                          style={{ color: "red" }}
                          className="text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25"
                        >
                          {messageError}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="button"
                      onClick={handleSendFeedback}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
