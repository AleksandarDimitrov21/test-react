import React from "react";
import { useCart } from "../../../CartContext";
import InsideCart from "./InsideCart";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        {/* Your Navbar or Header component */}

        <div className="flex flex-col">
          <h1 className="flex justify-center mt-20 text-4xl text-violet-500">
            Cart
          </h1>

          <div className="flex flex-col sm:flex-row justify-center mx-5 sm:mx-0  mb-20 mt-5 lg:mt-12 gap-3">
            {/* Cart content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-5">
              {cartItems.length === 0 ? (
                <p className="text-center text-lg text-gray-500">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((product, index) => (
                  <InsideCart
                    key={index}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                  />
                ))
              )}
            </div>
          </div>

          {/* Cart total and checkout button */}
          {cartItems.length > 0 && (
            <div className="flex justify-center">
              <div className=" bg-gray-200 p-4 w-36 md:w-72 rounded-r-lg shadow-md flex flex-col justify-between">
                <div className="">
                  <h1 className="text-black text-2xl font-bold mb-4">
                    Summary
                  </h1>
                  <div className="flex justify-between mb-2">
                    <p className="text-lg text-black">Subtotal:</p>
                    <p className="text-lg text-black">
                      ${calculateSubtotal(cartItems)}
                    </p>
                  </div>
                  {/* Additional summary details */}
                </div>
                <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 font-medium">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Helper function to calculate subtotal
const calculateSubtotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default CartPage;
