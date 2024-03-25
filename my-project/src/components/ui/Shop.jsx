import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="card w-96 h-fit shadow-xl">
      <figure className="m-0">
        <img src="src/assets/Samsung.png" alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body rounded-lg">
        <h2 className="card-title">
          Samsung M70B
          <div className="badge badge-secondary">NEW</div>
          <div className="badge badge-error">PROMO</div>
        </h2>
        <p className="h-12">1000</p>
        <div className="card-actions justify-end">
          <div>
            <button className="btn bg-black hover:bg-violet-500 border-0 text-white">
              Button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
