import React from "react";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
const InsideCart = ({ image, title, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="gap-2 py-3 border-t-2 flex items-center">
      <div className="ml-4 flex items-center">
        <div className="overflow-hidden">
          <img src={image} alt="Dawg" className="w-40 h-40 object-cover" />
        </div>
        <div className="ml-4">
          <p className="text-lg text-black font-bold">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="ml-auto mr-4 flex flex-col items-end">
        <div className="text-lg text-black font-bold mb-2">Price: ${price}</div>
        <div className="flex items-center">
          <p className="text-black mr-2">Quantity:</p>
          <button
            onClick={decrementQuantity}
            className="bg-violet-500 text-white p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <MinusIcon className="h-5 w-5" />
          </button>
          <span className="bg-gray-200 text-black py-1  px-4 mx-2 rounded-full">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="bg-violet-500 text-white p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsideCart;
