import React from "react";
import { useState } from "react";
import Buttom from "./Buttom";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState({
    homeAI: false,
    deliveryCost: false,
  });

  const toggleAccordion = (accordionKey) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [accordionKey]: !prevState[accordionKey],
    }));
  };
  return (
    <>
      <div className="bg-gray-100 my-5 mx-4 rounded-xl pb-10">
        <h3 className="flex font-bold text-violet-500 justify-center pt-16">
          FAQs
        </h3>
        <h1 className="flex text-4xl font-bold justify-center">
          Frequently asked questions
        </h1>
        <h2 className="text-lg font-sans font-medium text-slate-600 flex justify-center pt-3 pb-16">
          Need help with something? Here are our most frequently asked
          questions.
        </h2>
        <div
          className="bg-gray-100 rounded-xl cursor-pointer flex justify-between items-center"
          onClick={() => toggleAccordion("homeAI")}
        >
          <h3 className="text-xl font-bold border-black w-3/4  mx-80">
            What is HomeAI?
          </h3>
          <svg
            className={`inline-block w-6 h-6 transform transition-transform  mx-80 ${
              isOpen.homeAI ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen.homeAI && (
          <div className="bg-gray-100 rounded-b">
            <p className="flex justify-between text-lg ml-96">
              We are a technology company, engaged in e-commerce.
            </p>
          </div>
        )}
        <div
          className="bg-gray-100 rounded-xl cursor-pointer flex justify-between items-center"
          onClick={() => toggleAccordion("deliveryCost")}
        >
          <h3 className="text-xl font-bold border-black w-3/4 mx-80">
            What is the delivery cost?
          </h3>
          <svg
            className={`inline-block w-6 h-6 transform transition-transform  mx-80 ${
              isOpen.deliveryCost ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen.deliveryCost && (
          <div className="bg-gray-100 rounded-b">
            <p className="flex justify-between text-lg ml-96">
              Free for orders over $50
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <a href="src\assets\test.docx">
            <Buttom textMessage={"Learn more"} />
          </a>
        </div>
      </div>
    </>
  );
};

export default FAQ;
