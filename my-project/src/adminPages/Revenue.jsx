import React from "react";
import { Link } from "react-router-dom";

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
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full text-center text-gray-800">
            <thead>
              <tr className="text-black">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Client Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Order Date</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Change Status</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
