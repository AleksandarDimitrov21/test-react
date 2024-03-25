import React from "react";
import { useState } from "react";

const Accordion = ({ onAccordionChange, title, message }) => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const handleAccordionChange = (index) => {
    setSelectedAccordion(index);
    onAccordionChange(index);
  };

  return (
    <div>
      <div className="border-l-2 hover:border-violet-500 text-black">
        <div className="collapse collapse-arrow bg-white">
          <input
            type="radio"
            name="my-accordion-2"
            checked={selectedAccordion === 0}
            onChange={() => handleAccordionChange(0)}
          />
          <div className="collapse-title text-xl font-medium">Mission:</div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="border-l-2 hover:border-violet-500 text-black">
        <div className="collapse collapse-arrow bg-white">
          <input
            type="radio"
            name="my-accordion-2"
            checked={selectedAccordion === 1}
            onChange={() => handleAccordionChange(1)}
          />
          <div className="collapse-title text-xl font-medium">Future:</div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="border-l-2 hover:border-violet-500 text-black">
        <div className="collapse collapse-arrow bg-white ">
          <input
            type="radio"
            name="my-accordion-2"
            checked={selectedAccordion === 2}
            onChange={() => handleAccordionChange(2)}
          />
          <div className="collapse-title text-xl font-medium">Our team:</div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
