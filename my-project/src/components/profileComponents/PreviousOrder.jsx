import React from "react";
import { Link } from "react-router-dom";

const Order = ({ status, phone, address, time, price }) => {
  return (
    <div className="py-12 border-t">
      <div className="flex flex-wrap ">
        <div className="flex-grow-1 ">
          <div className="font-semibold mb-2 text-gray-700 text-xl">
            Status: {status}
          </div>

          <div className="text-gray-600">
            <p className="product-subtitle">Phone number: {phone}</p>
            <p className="product-size">Adress: {address}</p>
            <p className="product-size">Order date: {time}</p>
            <p className="product-size">Price: BGN {price}</p>
          </div>
        </div>
        <div className="flex flex-col ml-auto mr-8 mt-2 gap-1">
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
