import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Shop = ({ title, price, image, status }) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <>
      <div
        className="relative card w-96 h-fit shadow-xl"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        {showButtons && (
          <div className="absolute top-0 right-0 mr-2 mt-2 z-10">
            <button className="rounded-full bg-red-500 text-white p-2 mr-2">
              <img width={20} height={20} src="/delete.svg" alt="delete" />
            </button>
            {/* Edit Button */}
            <button className="rounded-full bg-violet-600 text-white p-2">
              <img width={20} height={20} src="/edit.svg" alt="edit" />
            </button>
          </div>
        )}
        <Link to="/product/product-info">
          <figure className="m-0 h-72">
            <img src={image} alt="Products" className="w-full" />
          </figure>
          <div className="card-body rounded-lg">
            <h2 className="card-title text-lg text-black">
              {title}
              <div className="badge badge-error">PROMO</div>
            </h2>
            <div className="card-actions justify-end items-center">
              <p className="text-xl text-gray-900">BGN {price}</p>
              <div>
                {status && (
                  <>
                    <button
                      className="btn bg-black hover:bg-violet-500 border-0 text-white"
                      onClick={(e) => e.preventDefault()}
                    >
                      Add
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
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Shop;
