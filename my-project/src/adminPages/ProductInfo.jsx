import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductInfo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders: ", error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-300 to-violet-200 min-h-screen">
      <div className="container mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="text-black bg-white hover:bg-violet-500 border-none font-bold rounded-full py-2 px-4"
          >
            Home
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full text-center text-gray-800">
            <thead>
              <tr className="text-black">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Discount</th>
                <th className="px-4 py-2">Current Price</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border px-4 py-2">{product.id}</td>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2">{product.discount}%</td>
                  <td className="border px-4 py-2">
                    BGN {product.currentPrice}
                  </td>
                  <td className="border px-4 py-2">
                    {product.isDeleted ? "true" : "false"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
