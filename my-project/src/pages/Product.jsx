import React from "react";
import Shop from "../components/ui/productComponents/Shop";
import NavBar from "../components/ui/navigation/NavBar";
import Drawer from "../components/ui/productComponents/Drawer";
import ScrollButton from "../components/ui/ScrollButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product = ({ status, setStatus }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState("Sort by");

  // Array of available categories
  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Toys",
  ];
  const sorted = ["Newest", "Price: High-low", "Price: Low-High"];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="overflow-hidden">
        <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
      </div>

      <div className="flex flex-col flex-grow">
        <h1 className="flex justify-center mt-20 text-4xl text-violet-500">
          Products
        </h1>
        {!status && (
          <h1 className="flex justify-center mt-10 text-3xl text-violet-500">
            Please log in to add products to the cart.
          </h1>
        )}

        {/* Category Menu */}
        <div className="flex justify-center mb-20 mt-5 lg:mt-12">
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <label className="input input-bordered flex items-center  bg-white">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="relative">
              <select
                className="block appearance-none border border-gray-200 text-gray-400 rounded-md  py-3 pl-1 pr-6  bg-white leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <select
                className="block appearance-none border border-gray-200 text-gray-400 rounded-md  py-3 pl-1 pr-6  bg-white leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {sorted.map((sort) => (
                  <option key={sort} value={sort}>
                    {sort}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 lg:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Shop
              title={"Samsung M70B"}
              image={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
              }
              price={2300}
              status={status}
            />
            <Shop
              title={"Samsung M70B"}
              image={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
              }
              price={2300}
              status={status}
            />
            <Shop
              title={"Samsung M70B"}
              image={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
              }
              price={2300}
              status={status}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
