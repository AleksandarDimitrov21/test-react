import React from "react";

const WholePagePhoto = () => {
  return (
    <>
      <div className="relative ">
        <div className="w-full h-screen absolute bg-black bg-opacity-20" />
        <img
          src="src/assets/try.jpg"
          alt="Product"
          className="w-full h-screen object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome!</h1>
        </div>
      </div>
    </>
  );
};

export default WholePagePhoto;
