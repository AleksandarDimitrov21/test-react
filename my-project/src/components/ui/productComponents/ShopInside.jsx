import NavBar from "../navigation/NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShopInside = ({ status, setStatus }) => {
  const [showButtons, setShowButtons] = useState(true);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <div className="overflow-hidden h-16">
        <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
      </div>
      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-16 mx-4 md:mx-8">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-r-0 md:border-r-2 border-gray-300 mb-8 md:mb-0">
          <img
            src="https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/samsung-neo-qled-8k/03162023/QN65QN900CFXZA_003_L-Perspective_Titan-Black-1600x1200-1.jpg?$product-details-jpg$"
            alt="photo"
          />
          <div className="flex flex-wrap w-full justify-center"></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center pt-4 md:pt-0 px-4 md:px-12">
          {showButtons && (
            <div className="flex items-center justify-end mb-4">
              <button
                className="rounded-full bg-red-500 text-white p-2 mr-2"
                onClick={() => {
                  console.log("Delete button clicked");
                }}
              >
                <img width={20} height={20} src="/delete.svg" alt="delete" />
              </button>
              <button
                className="rounded-full bg-violet-500 text-white p-2 mr-2"
                onClick={() => {
                  console.log("Edit button clicked");
                }}
              >
                <img width={20} height={20} src="/edit.svg" alt="edit" />
              </button>
            </div>
          )}
          {product && ( 
            <>
              <h2 className="text-xl text-gray-900 mb-2">{product.category}</h2>
              <h2 className="text-3xl text-black mb-4">{product.name}</h2>

              <p className="mb-4 text-slate-900 text-xl">
                {product.description}
              </p>
              <p className="mb-4 text-slate-900 text-xl">{product.technical}</p>
              {product.discount > 0 && 
                <p className="text-red-700 font-bold text-lg">
                  -{product.discount}%
                </p>
              )}
              <p className="text-2xl mb-2 text-black">
                <span className="text-xl">BGN {product.currentPrice}</span>
              </p>
              <div className="flex justify-center mb-2">
                <button className="mt-4 w-1/2 bg-violet-500 hover:bg-violet-400 text-white font-bold p-3 rounded-full">
                  Add to Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopInside;
