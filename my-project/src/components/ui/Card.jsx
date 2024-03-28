import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="dropdown dropdown-end items-center">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item text-white border-none bg-violet-600">
            8
          </span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-gray-200 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg text-black">8 Items</span>
          <span className=" text-black">
            Subtotal: <span className="text-violet-600">BGN 300</span>
          </span>
          <div className="card-actions">
            <Link to="/card">
              <button className="btn btn-primary text-white btn-block">
                View cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
