import React from "react";
import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-300 to-violet-200">
        <Link to="/" className="absolute top-0 right-0 m-4">
          <button className="text-md text-black bg-white hover:bg-violet-300 border-none font-bold rounded-full p-3">
            Home
          </button>
        </Link>
        <div className="flex justify-center items-center h-screen">
          <div className="border-x-1 shadow-lg w-auto rounded-xl py-5 bg-white">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
