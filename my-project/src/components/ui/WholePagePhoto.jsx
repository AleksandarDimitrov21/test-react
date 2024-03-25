import React from "react";
import { motion } from "framer-motion";

const WholePagePhoto = () => {
  const text = "Welcome to Smart Home".split(" ");
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
          <h1 className="text-white font-sans text-6xl font-bold ">
            {text.map((el, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i / 5,
                }}
                className={
                  el === "Smart" || el === "Home" ? "text-violet-700" : ""
                }
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
};

export default WholePagePhoto;
