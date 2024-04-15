import NavBar from "../components/ui/navigation/NavBar";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RoundedTwoDecimals } from "../components/RoundedTwoDecimals";

const InsideProductEmployee = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/productEmployee/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      }
    };

    fetchProduct();
  }, [id]);

  const deleteProduct = async () => {
    try {
      await axios.post(`http://localhost:8080/productDelete/${id}`);
      console.log("Product deleted successfully!");
      navigate("/product");
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="overflow-hidden h-16">
        <NavBar />
      </div>
      <div className="flex flex-col md:flex-row items-center  mx-4 md:mx-8">
        <div className="w-full md:w-2/6 flex flex-col items-center justify-center border-r-0 md:border-r-2 border-gray-300 mb-8 md:mb-0">
          <img src={product.photo} alt="photo" />
          <div className="flex flex-wrap w-full justify-center"></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center pt-4 md:pt-0 px-4 md:px-12">
          {showButtons && (
            <div className="flex items-center justify-end mb-4">
              <button
                className="rounded-full bg-red-500 text-white p-2 mr-2"
                onClick={deleteProduct}
              >
                <img width={20} height={20} src="/delete.svg" alt="delete" />
              </button>
              <Link key={product.id} to={`/edit-product/${product.id}`}>
                <button className="rounded-full bg-violet-500 text-white p-2 mr-2">
                  <img width={20} height={20} src="/edit.svg" alt="edit" />
                </button>
              </Link>
            </div>
          )}
          {product && (
            <>
              <h2 className="text-xl text-gray-900 mb-2">{product.category}</h2>
              <h2 className="text-3xl text-black mb-2">{product.name}</h2>
              <h2 className="text-xl text-gray-900 mb-1">
                Model: {product.model}
              </h2>
              <h2 className="text-xl text-gray-900 mb-4">
                Brand: {product.brand}
              </h2>

              <p className="mb-4 text-slate-900 text-xl">
                {product.description}
              </p>
              <p className="mb-4 text-slate-900 text-xl">{product.technical}</p>
              {product.discount > 0 && (
                <p className="text-red-700 font-bold text-lg">
                  -{product.discount}%
                </p>
              )}
              <p className="text-2xl mb-2 text-black">
                <span className="text-xl">
                  BGN{" "}
                  {product && product.currentPrice
                    ? RoundedTwoDecimals(product.currentPrice)
                    : "Price unavailable"}
                </span>
              </p>
              <div className="flex justify-center mb-2">
                {/* CHANGE THE URL INSIDE LINK */}
                <Link to="/">
                  <button className="mt-4 w-96 bg-violet-500 hover:bg-violet-400 text-white font-bold p-3 rounded-full">
                    Return for sale
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsideProductEmployee;
