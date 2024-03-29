import React from "react";

const Stat = () => {
  return (
    <div class="stats stats-vertical lg:stats-horizontal bg-gray-100 p-8 rounded-lg">
      <div class="stat mb-4 lg:mr-6 lg:mb-0">
        <div class="stat-title text-lg font-semibold text-gray-800">
          Items bought
        </div>
        <div class="stat-value text-3xl font-bold text-blue-600">31K</div>
        <div class="stat-desc text-sm text-gray-600">Jan 1st - Feb 1st</div>
      </div>

      <div class="stat mb-4 lg:mr-6 lg:mb-0">
        <div class="stat-title text-lg font-semibold text-gray-800">
          New Users
        </div>
        <div class="stat-value text-3xl font-bold text-green-600">4,200</div>
        <div class="stat-desc text-sm text-gray-600">↗︎ 400 (22%)</div>
      </div>

      <div class="stat">
        <div class="stat-title text-lg font-semibold text-gray-800">
          New Registers
        </div>
        <div class="stat-value text-3xl font-bold text-red-600">1,200</div>
        <div class="stat-desc text-sm text-gray-600">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Stat;
