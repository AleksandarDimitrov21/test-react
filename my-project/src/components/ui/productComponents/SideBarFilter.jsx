import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";

const SideBarFilter = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li>
      <h1
        onClick={toggleAccordion}
        className="text-xl ml-3 px-2 py-3 flex items-center cursor-pointer border-t border-b border-gray-200"
      >
        {isOpen ? <ChevronDown /> : <ChevronRight />}
        <span className="ml-3 ">{title}</span>
      </h1>
      <ul className={`ml-9 py-4  ${isOpen ? "block" : "hidden"}`}>
        <input type="checkbox" checked={isOpen} onChange={toggleAccordion} />
        {children}
      </ul>
    </li>
  );
};

export default SideBarFilter;
