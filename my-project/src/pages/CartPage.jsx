import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../components/ui/products";
import Product from "../components/ui/Product";

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
            <div className="cart-items">
              {PRODUCTS.map((product) => {
                return <Product key={product.id} data={product} />;
              })}
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
                Subtotal:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; 1230$
              </p>
              <p className="text-lg font-medium text-black mb-6">
                Estimated Delivery & Handling: &nbsp; &nbsp; Free
              </p>
              <hr className="border-t-2 border-gray-300"></hr>
              <p className="text-lg font-medium text-black mb-6 mt-5">
                Total:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1230$
              </p>
              <hr className="border-t-2 border-gray-300"></hr>
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
