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
  const itemTotal = price * quantity;
  return (
    <div className="gap-2 py-3 border-t-2 flex flex-col sm:flex-row items-center">
      {/* Product Image and Details */}
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
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-sm text-gray-500">Price: ${price}</p>
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
          <div className="ml-4 mr-2 text-sm text-black font-bold">
            Total: ${itemTotal}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideCart;
