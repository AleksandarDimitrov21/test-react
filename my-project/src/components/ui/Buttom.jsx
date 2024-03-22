import React, { useState } from "react";

const Buttom = ({ textMessage }) => {
  const [color, setColor] = useState("");

  const handleClick = () => {
    setColor("bg-green-700");
    setTimeout(() => {
      setColor("black");
    }, 1000);
  };
  return (
    <button className={`btn ${color} text-white mt-5`} onClick={handleClick}>
      {textMessage}
    </button>
  );
};

export default Buttom;
