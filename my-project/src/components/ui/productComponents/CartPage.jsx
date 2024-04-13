import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import InsideCart from "./InsideCart";
import createMockProducts from "../../../CreateMockProducts";

const CartPage = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [Products, setProducts] = useState([]);
  const chosenIds = [1, 2, 16]; // Array of chosen IDs

  useEffect(() => {
    const fetchData = async () => {
      const mockProducts = await createMockProducts();
      // Filter mockProducts based on chosenIds
      const filteredProducts = mockProducts.filter((product) =>
        chosenIds.includes(product.id)
      );
      setProducts(filteredProducts);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      for (let i = 0; i < Products.length; i++) {
        total += Products[i].currentPrice * Products[i].quantity;
      }
      setTotalAmount(total);
    };

    calculateTotal();
  }, [Products]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = [...Products];
    updatedProducts[index].quantity = newQuantity;
    setProducts(updatedProducts);
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.1,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: true,
    });

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://pixelz.cc/wp-content/uploads/2018/09/iot-internet-of-things-uhd-4k-wallpaper.jpg"
            className="absolute inset-0 w-full h-full object-cover filter "
            alt="Main Background"
          />

          <div className="absolute inset-0 flex flex-col justify-center">
            <Link to="/" className="absolute top-0 right-0 m-4">
              <button className="text-md text-black bg-white hover:bg-violet-700 border-none font-bold rounded-full p-3">
                Home
              </button>
            </Link>

            <div className="flex justify-center mt-14 sm:mt-0">
              <div
                className="bg-gray-100 p-4 rounded-l-lg overflow-y-auto"
                ref={scrollRef}
              >
                <div>
                  <h1 className="text-violet-500 text-2xl font-bold mb-4">
                    Bag
                  </h1>
                </div>
                <div className="gap-4 h-[500px] overflow-y-auto">
                  {Products.map((product, index) => (
                    <InsideCart
                      key={index}
                      title={product.name}
                      image={product.photo}
                      price={product.currentPrice}
                      quantity={product.quantity}
                      onQuantityChange={(newQuantity) =>
                        handleQuantityChange(index, newQuantity)
                      }
                    />
                  ))}
                </div>
              </div>
              <div className=" bg-gray-200 p-4 w-36 md:w-72 rounded-r-lg shadow-md flex flex-col justify-between">
                <div className="">
                  <h1 className="text-black text-2xl font-bold mb-4">
                    Summary
                  </h1>
                  <div className="flex justify-between mb-2">
                    <p className="text-lg text-black">Subtotal:</p>
                    <p className="text-lg text-black">${totalAmount}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-lg text-black">Discount:</p>
                    <p className="text-lg text-black">$0</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-lg text-black">Total:</p>
                    <p className="text-lg text-black">${totalAmount}</p>
                  </div>
                </div>
                <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 font-medium">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
