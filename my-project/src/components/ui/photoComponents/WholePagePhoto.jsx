import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WholePagePhoto = () => {
  const [scrollY, setScrollY] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      const opacity = 1 - currentScrollY / (window.innerHeight / 2);
      setFadeOpacity(opacity < 0 ? 0 : opacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: fadeOpacity }}
        >
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
                  el === "Welcome" || el === "to" ? "text-violet-700" : ""
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
