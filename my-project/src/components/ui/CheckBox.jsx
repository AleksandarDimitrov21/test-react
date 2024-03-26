import React from "react";
import { useState } from "react";

const CheckBox = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <li>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-6 h-6 appearance-none rounded border border-gray-400 checked:bg-black checked:border-transparent focus:outline-none"
        />
        <span className="text-md">{text}</span>
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 10.293a1 1 0 011.414 0l3 3a1 1 0 001.414 0l7-7a1 1 0 10-1.414-1.414l-6.296 6.297a1 1 0 01-1.415 0L6.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 000 1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </label>
    </li>
  );
};

export default CheckBox;
