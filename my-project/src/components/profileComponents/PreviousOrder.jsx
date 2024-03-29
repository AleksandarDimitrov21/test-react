import React from "react";
import { Link } from "react-router-dom";

const Order = ({ status, title, description, price, image }) => {
  return (
    <div class="py-12 border-y">
      <div class="flex flex-wrap ">
        <div class="pr-3">
          <img
            src={image}
            tabindex="0"
            className="w-40 h-40 bg-slate-100 "
          ></img>
        </div>
        <div class="flex-grow-1 ">
          <div class="font-semibold mb-2 text-gray-700 text-xl">{status}</div>
          <h2 className="font-semibold mb-2 text-lg">{title}</h2>
          <div class="text-gray-600">
            <p class="product-subtitle">{description}</p>
            <p class="product-size">{price}</p>
          </div>
        </div>
        <div className="flex flex-col ml-auto mr-8 mt-2 gap-1">
          <button class="btn bg-violet-400 hover:bg-violet-600 text-white px-6">
            View
          </button>
          <Link to="/product">
            <button class="btn bg-violet-400 hover:bg-violet-600 text-white px-6">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
