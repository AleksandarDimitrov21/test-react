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
      </div>
    </>
  );
};

export default CartPage;
