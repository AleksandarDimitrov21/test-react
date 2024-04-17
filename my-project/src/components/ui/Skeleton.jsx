import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-52">
      <div className="flex gap-4  items-center">
        <div className="skeleton w-16 h-16 rounded-full bg-gray-200 shrink-0"></div>
        <div className="flex flex-col  gap-4">
          <div className="skeleton h-4 w-20 bg-gray-200"></div>
          <div className="skeleton h-4 w-28 bg-gray-200"></div>
        </div>
      </div>
      <div className="skeleton h-32 w-full bg-gray-200"></div>
    </div>
  );
};

export default Skeleton;
