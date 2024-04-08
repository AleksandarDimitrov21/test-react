import React, { useState, useEffect } from "react";
import axios from "axios";
import Shop from "../components/ui/productComponents/Shop";
import NavBar from "../components/ui/navigation/NavBar";
import { Link } from "react-router-dom";

const Product = ({ status, setStatus }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState("Sort by");
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/product/search",
        searchTerm
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />

      <div className="flex flex-col flex-grow">
        <h1 className="flex justify-center mt-20 text-4xl text-violet-500">
          Products
        </h1>

        <div className="flex justify-center mb-20 mt-5 lg:mt-12">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name..."
            className="input input-bordered flex items-center bg-white"
          />
          <button onClick={handleSearch} className="btn btn-primary ml-2">
            Search
          </button>
        </div>

        <div className="flex justify-center mt-6 lg:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-3">
            {products.map((product) => (
              <Shop
                key={product.id}
                title={product.name}
                price={product.originalPrice}
                status={status}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link to={"/add-product"}>
            <button className="bg-violet-600 border-none rounded-3xl py-3 w-96 text-xl my-5 font-semibold text-white hover:bg-violet-700">
              Add Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
