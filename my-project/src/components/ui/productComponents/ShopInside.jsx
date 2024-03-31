import React from "react";
import NavBar from "../navigation/NavBar";

const ShopInside = ({ status, setStatus }) => {
  return (
    <div className=" min-h-screen bg-white">
      <div className="overflow-hidden h-16 ">
        <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
      </div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.smart-house.bg/4986-thickbox_default/smart-robotic-vacuum-cleaner.jpg"
            alt="Product"
            className="h-96 w-96"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5 text-violet-500">
              ??Kratko opisanie:
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopInside;
