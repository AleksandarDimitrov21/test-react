import React from "react";

const Product = ({ id, productName, price, productImage }) => {
  return (
    <div className="product h-auto flex items-center border-2 border-black border-solid mb-5">
      <div className="w-3/12">
        <img
          src={productImage}
          alt={productName}
          className="h-full w-full object-cover object-center"
        />
        <hr className="border-t-2 border-gray-300"></hr>
      </div>
      <div className="flex-1 p-4">
        <div className="flex-1 p-4 flex items-center">
          <h2 className="text-lg font-medium text-black mr-2">{productName}</h2>
          <p className="text-lg font-medium text-black ml-auto">${price}</p>
        </div>
        <hr className="border-t-2 border-gray-300"></hr>
      </div>
    </div>
  );
};

export default Product;
