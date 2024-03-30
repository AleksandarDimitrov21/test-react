import React from "react";
import Avatar from "../photoComponents/Avatar";
import { Link } from "react-router-dom";

const BackgroundPhoto = () => {
  return (
    <div>
      <div className="relative">
        <Link to="/">
          <button className="absolute top-0 right-0 m-4 text-md text-white bg-black hover:bg-violet-700 border-none font-bold rounded-full p-3">
            Home
          </button>
        </Link>
        <div>
          <img
            src="src\assets\photoBackground.jpg"
            alt="Product"
            className="w-full h-96 object-cover shadow-md shadow-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundPhoto;
