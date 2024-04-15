import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Revenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(null);
  const [error, setError] = useState("");

  const fetchTotalRevenue = async () => {
    try {
      const response = await axios.get("http://localhost:8080/revenue", {
        data: {
          startDate: "2024-01-01T00:00:00", // Adjust with your start date state
          endDate: "2024-05-01T23:59:59", // Adjust with your end date state
        },
      });
      setTotalRevenue(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching total revenue:", err);
      setError("Failed to fetch revenue data.");
      setTotalRevenue(null);
    }
  };

  // Component UI
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
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="mb-4">
            <button
              onClick={fetchTotalRevenue}
              className="text-white bg-indigo-600 hover:bg-indigo-500 border-none font-bold rounded-full py-2 px-4"
            >
              Get Revenue
            </button>
          </div>
          {totalRevenue !== null && (
            <div className="mb-4">
              <p className="text-lg font-semibold">
                Total Revenue: {totalRevenue}
              </p>
            </div>
          )}
          {error && (
            <div className="mb-4">
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
