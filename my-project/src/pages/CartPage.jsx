import React from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <div className="h-screen bg-white">
        <Link to="/">
          <button className="absolute top-0 right-0 m-4 text-lg text-black font-bold">
            Home
          </button>
        </Link>
        <div className="text-black font-bold text-4xl">CartPage</div>
        <div className="flex justify-center h-auto mt-10">
          {/*Container*/}
          <div className="left bg-slate-200 p-4 w-2/5">
            {/*Bag*/}
            <div>
              <h1 className="text-black text-2xl font-bold mb-4">Bag</h1>
            </div>
            <div className="flex items-center border-y border-y-stone-950 py-3">
              <div className="w-40 h-40 overflow-hidden rounded-lg">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                  alt="Dawg"
                ></img>
              </div>
              <div className="ml-4 flex flex-col justify-start">
                <div className="flex justify-between mb-1">
                  <p className="text-lg text-black font-bold">Dog</p>
                  <p className="text-lg text-black font-bold ml-96">100$</p>
                </div>
                <p className="text-black">Animal</p>
                <p className="text-black">Golden retriever</p>
                <div className="flex items-center mb-10 mt-2">
                  <p className="text-black mr-1">Quantity</p>
                  <button className="bg-slate-600 hover:bg-zinc-800 text-white py-1 px-2 rounded-lg">
                    +
                  </button>
                  <button className="bg-slate-600 hover:bg-zinc-800 text-white py-1 px-3 ml-1 rounded-lg">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center border-y border-y-stone-950 py-3">
              <div className="w-40 h-40 overflow-hidden rounded-lg">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                  alt="Dawg"
                ></img>
              </div>
              <div className="ml-4 flex flex-col justify-start">
                <div className="flex justify-between mb-1">
                  <p className="text-lg text-black font-bold">Dog</p>
                  <p className="text-lg text-black font-bold ml-96">100$</p>
                </div>
                <p className="text-black">Animal</p>
                <p className="text-black">Golden retriever</p>
                <div className="flex items-center mb-10 mt-2">
                  <p className="text-black mr-1">Quantity</p>
                  <button className="bg-slate-600 hover:bg-zinc-800 text-white py-1 px-2 rounded-lg">
                    +
                  </button>
                  <button className="bg-slate-600 hover:bg-zinc-800 text-white py-1 px-3 ml-1 rounded-lg">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center border-y border-y-stone-950 py-3">
              <div className="w-40 h-40 overflow-hidden rounded-lg">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                  alt="Dawg"
                ></img>
              </div>
              <div className="ml-4 flex flex-col justify-start">
                <div className="flex justify-between mb-1">
                  <p className="text-lg text-black font-bold">Dog</p>
                  <p className="text-lg text-black font-bold ml-96">100$</p>
                </div>
                <p className="text-black">Animal</p>
                <p className="text-black">Golden retriever</p>
                <div className="flex items-center mb-10 mt-2">
                  <p className="text-black mr-1">Quantity</p>
                  <button className="bg-slate-600 hover:bg-zinc-800 text-white py-1 px-2 rounded-lg">
                    +
                  </button>
                  <button className="bg-slate-600 hover:bg-zinc-800 text-white py-1 px-3 ml-1 rounded-lg">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right bg-slate-200 p-4 w-1/5">
            {/*Summary*/}
            <div>
              <h1 className="text-black text-2xl font-bold mb-4">Summary</h1>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-lg text-black">Subtotal:</p>
              <p className="text-lg text-black">100$</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg text-black">
                Estimated Delivery & Handling:
              </p>
              <p className="text-lg text-black">0$</p>
            </div>
            <div className="flex justify-between mb-2 border-y border-y-stone-950 py-3">
              <p className="text-lg text-black">Total:</p>
              <p className="text-lg text-black">100$</p>
            </div>
            <button class="bg-black text-white py-5 px-6 rounded-full hover:bg-zinc-800 font-medium w-full mt-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
