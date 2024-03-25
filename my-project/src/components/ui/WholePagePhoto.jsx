import React from "react";

const WholePagePhoto = () => {
  return (
    <>
      <div className="relative ">
        <div className="w-full h-screen absolute bg-black bg-opacity-20" />
        <video
          src="src\assets\video.mp4"
          alt="Product"
          autoPlay
          loop
          muted
          type="video/mp4"
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
