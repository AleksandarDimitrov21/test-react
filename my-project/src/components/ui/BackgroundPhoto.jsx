import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const BackgroundPhoto = () => {
  return (
    <div>
      <div className="relative">
        <Link to="/">
          <button className="absolute top-0 right-0 m-4 text-lg text-white font-bold">
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
