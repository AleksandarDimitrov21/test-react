import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Revenue = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-300 to-violet-200 min-h-screen">
      <div className="container mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="text-black bg-white hover:bg-violet-200 border-none font-bold rounded-full py-2 px-4"
          >
            Home
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4"></div>
      </div>
    </div>
  );
};

export default Revenue;
