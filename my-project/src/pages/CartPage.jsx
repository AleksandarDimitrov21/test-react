import React from "react";
import { Link } from "react-router-dom";
import InsideCart from "../components/ui/productComponents/InsideCart";

const CartPage = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="src\assets\mainPhoto.jpg"
            className="h-full w-full object-cover filter blur-sm"
          />

          <div className="absolute inset-0 ">
            <Link to="/">
              <button className="absolute top-0 right-0 m-4 text-lg text-black font-bold">
                Home
              </button>
            </Link>

            <div className="flex justify-center mt-10">
              <div className="left bg-gray-100 p-4 w-2/5 rounded-l-lg">
                <div>
                  <h1 className="text-violet-500 text-2xl font-bold mb-4">
                    Bag
                  </h1>
                </div>
                <div className="gap-3">
                  <InsideCart />
                  <InsideCart />
                  <InsideCart />
                </div>
              </div>
              <div className="right bg-gray-200 p-4 w-96 rounded-r-lg shadow-md flex flex-col justify-between">
                <div>
                  <h1 className="text-black  text-2xl font-bold mb-4">
                    Summary
                  </h1>
                  <div className="flex justify-between mb-2">
                    <p className="text-lg text-black">Subtotal:</p>
                    <p className="text-lg text-black">$100</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-lg text-black">Delivery:</p>
                    <p className="text-lg text-black">$0</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-lg text-black">Total:</p>
                    <p className="text-lg text-black">$100</p>
                  </div>
                </div>
                <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 font-medium">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
