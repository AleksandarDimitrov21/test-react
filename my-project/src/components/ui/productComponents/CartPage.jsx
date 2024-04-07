import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import InsideCart from "./InsideCart";

const CartPage = () => {
  const Products = [
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
      title: "ProductDog",
      description: "Tva e ot Products",
      price: 99,
    },
  ];

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
            src="src\assets\mainPhoto.jpg"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm"
            alt="Main Background"
          />

          <div className="absolute inset-0 flex flex-col justify-between">
            <Link to="/" className="absolute top-0 right-0 m-4">
              <button className="text-md text-black bg-white hover:bg-violet-700 border-none font-bold rounded-full p-3">
                Home
              </button>
            </Link>

            <div className="flex justify-center mt-16 sm:mt-32">
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
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      description={product.description}
                    />
                  ))}
                  {Products.map((product, index) => (
                    <InsideCart
                      key={index}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      description={product.description}
                    />
                  ))}
                  {Products.map((product, index) => (
                    <InsideCart
                      key={index}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      description={product.description}
                    />
                  ))}
                  {Products.map((product, index) => (
                    <InsideCart
                      key={index}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      description={product.description}
                    />
                  ))}
                  {Products.map((product, index) => (
                    <InsideCart
                      key={index}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      description={product.description}
                    />
                  ))}
                  {Products.map((product, index) => (
                    <InsideCart
                      key={index}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      description={product.description}
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
                    <p className="text-lg text-black">$100</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-lg text-black">Discount:</p>
                    <p className="text-lg text-black">$0</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-lg text-black">Total:</p>
                    <p className="text-lg text-black">$100</p>
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
