import React from "react";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product w-64 h-64 overflow-hidden">
      <div>
        <img
          src={productImage}
          alt={productName}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{productName}</h2>
        <p className="text-lg font-semibold">${price}</p>
      </div>
    </div>
  );
}

export default Product;
