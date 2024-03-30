import React from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <div className="h-screen bg-white">
        <Link to="/">
          <button className="absolute top-0 right-0 m-4 text-lg text-black font-bold">
            Home
          </button>
        </Link>
        <div className="text-black font-bold text-4xl">CartPage</div>
        <div className="flex w-full justify-center h-screen">
          <div className="cart w-2/5">
            <div>
              <h1 className="text-black text-2xl font-bold mb-4 mt-12">Bag</h1>
            </div>
          </div>
          <div className="summary ml-8 w-80">
            <div>
              <h1 className="text-black text-2xl font-bold mb-4 mt-12">
                Summary
              </h1>
            </div>
            <div className="summary-text">
              <p className="text-lg font-medium text-black mb-3">
                Subtotal: 1230$
              </p>
              <p className="text-lg font-medium text-black mb-6">
                Estimated Delivery & Handling: Free
              </p>

              <p className="text-lg font-medium text-black mb-6 mt-5 border-y-2 py-2">
                Total: 1230$
              </p>

              <button className="bg-black hover:bg-zinc-700 text-white font-semibold py-5 px-5 text-lg rounded-full w-80 mt-5">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
