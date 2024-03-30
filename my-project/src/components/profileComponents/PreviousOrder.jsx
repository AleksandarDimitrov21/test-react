import React from "react";
import { Link } from "react-router-dom";

const Order = ({ status, title, description, price, image }) => {
  return (
    <div className="py-12 border-y">
      <div className="flex flex-wrap ">
        <div className="pr-3">
          <img
            src={image}
            tabIndex="0"
            className="w-40 h-40 bg-slate-100 "
          ></img>
        </div>
        <div className="flex-grow-1 ">
          <div className="font-semibold mb-2 text-gray-700 text-xl">
            {status}
          </div>
          <h2 className="font-semibold mb-2 text-lg">{title}</h2>
          <div className="text-gray-600">
            <p className="product-subtitle">{description}</p>
            <p className="product-size">{price}</p>
          </div>
        </div>
        <div className="flex flex-col ml-auto mr-8 mt-2 gap-1">
          <button className="btn bg-violet-400 hover:bg-violet-600 text-white px-6 border-none">
            View
          </button>
          <Link to="/product">
            <button className="btn bg-violet-400 hover:bg-violet-600 text-white px-6 border-none">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
