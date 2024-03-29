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
        <div className="cart">
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="cart">
            {PRODUCTS.map((product) => {
              return <Product key={product.id} data={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
