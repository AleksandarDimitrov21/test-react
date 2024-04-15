import React from "react";
import { useCart } from "../../../CartContext";
import { useNavigate } from "react-router-dom";

const Shop = ({
  id,
  title,
  priceCurrent,
  priceOriginal,
  image,
  discount,
  buttonName,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.preventDefault();
    const product = {
      id,
      title,
      price: priceCurrent,
      image,
      discount,
      quantity: 1,
    };
    addToCart(product);
  };

  return (
    <>
      <div className="relative w-full sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl card shadow-xl">
        <figure className="h-64 overflow-hidden">
          <img
            src={image}
            alt="Product"
            className="w-auto h-full object-cover"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg text-black">{title}</h2>
          <div className="flex items-center">
            <div className="text-xl text-gray-900 mr-2">
              BGN{" "}
              {discount > 0 && <s className="text-gray-500">{priceOriginal}</s>}{" "}
              {priceCurrent}
            </div>
            {discount > 0 && (
              <p className="text-red-700 font-bold text-lg">-{discount}%</p>
            )}
          </div>
          <div className="flex items-center justify-end">
            <button
              className="btn bg-black hover:bg-violet-500 text-white border-none"
              onClick={(event) => handleAddToCart(event)}
            >
              {buttonName}
              <img src="cart2.svg" alt="cart" className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
