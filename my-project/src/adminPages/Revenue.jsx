import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Revenue = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [revenue, setRevenue] = useState(null);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = startDate + "T00:00:00";
    const formattedEndDate = endDate + "T23:59:59";

    const requestData = {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    };

    console.log("Request data sent to backend:", requestData);

    try {
      const response = await axios.post(
        "http://localhost:8080/revenue",
        requestData
      );
      setRevenue(response.data);
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4">
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="border border-gray-400 rounded p-2"
            />
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="border border-gray-400 rounded p-2"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded"
            >
              Get Revenue
            </button>
          </div>
        </form>
        {revenue !== null && (
          <div className="bg-white rounded-lg shadow-lg p-4">
            Total Revenue: {revenue}
          </div>
        )}
      </div>
    </div>
  );
};

export default Revenue;
