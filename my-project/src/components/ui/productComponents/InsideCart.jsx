import React from "react";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
const InsideCart = ({ image, title, price, quantity, onQuantityChange }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const incrementQuantity = () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const decrementQuantity = () => {
    if (localQuantity > 1) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const calculateNewPrice = (price, quantity) => {
    return price * quantity;
  };

  return (
    <div className="gap-2 py-3 border-t-2 flex flex-col sm:flex-row items-center">
      <div className="flex items-center mb-2 sm:mb-0">
        <div className="overflow-hidden">
          <img
            src={image}
            alt="Product"
            className="w-20 h-20 sm:w-40 sm:h-40 object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="text-lg text-black font-bold">{title}</p>
          <p className="text-sm text-gray-500">
            Price: ${calculateNewPrice(price, localQuantity)}
          </p>
        </div>
      </div>

      {/* Price and Quantity Controls */}
      <div className="ml-auto flex ">
        <div className="flex items-center">
          <button
            onClick={decrementQuantity}
            className="bg-violet-500 text-white  rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <MinusIcon className="h-5 w-5" />
          </button>
          <span className="bg-gray-200 text-black py-1 px-3 mx-2 rounded-full">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="bg-violet-500 text-white  mr-1 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsideCart;
