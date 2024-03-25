import React from "react";
import Accordion from "./Accordion";
import { useState } from "react";

const About = () => {
  const [selectedAccordionIndex, setSelectedAccordionIndex] = useState(0);

  const handleAccordionChange = (index) => {
    setSelectedAccordionIndex(index);
  };

  const renderImage = () => {
    switch (selectedAccordionIndex) {
      case 0:
        return (
          <img
            src="src\assets\glupost4.jpg" // Replace with your second image URL
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      case 1:
        return (
          <img
            src="src\assets\glupost3.jpg" // Replace with your second image URL
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      case 2:
        return (
          <img
            src="src\assets\glupost.jpg" // Replace with your third image URL
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {renderImage()}
        <div>
          <h1 className="text-5xl font-bold mb-5 text-violet-500">About us:</h1>
          <Accordion onAccordionChange={handleAccordionChange} />
          <button className="btn btn-primary mt-10">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
