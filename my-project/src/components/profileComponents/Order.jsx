import React from "react";

const Order = () => {
  return (
    <div class="py-12 border-y">
      <div class="flex flex-wrap ">
        <div class="pr-3">
          <img
            alt="Basketball Shoes"
            src="https://s1.kaercher-media.com/mam/12696200/mainproduct/205903/d3.jpg"
            tabindex="0"
            className="w-40 h-40 bg-slate-100 "
          ></img>
        </div>
        <div class="flex-grow-1 ">
          <div class="font-semibold mb-2">Delivered</div>
          <h2>Giannis Freak 4 'Cookies and Cream'</h2>
          <div class="text-gray-600">
            <p class="product-subtitle">Basketball Shoes</p>
            <p class="product-size">Size EU 44.5</p>
          </div>
        </div>
        <div className="flex flex-col ml-auto mr-8 mt-2 gap-1">
          <button class="btn bg-violet-400 hover:bg-violet-600 text-white px-6">
            View
          </button>
          <button class="btn bg-violet-400 hover:bg-violet-600 text-white px-6">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
