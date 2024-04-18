import React, { useEffect, useState } from "react";
import { useCart } from "../../../CartContext";
import InsideCart from "./InsideCart";
import NavBar from "../navigation/NavBar";
import { RoundedTwoDecimals } from "../../RoundedTwoDecimals";
import axios from "axios";
import { useAuth } from "../../../auth/AuthContext ";

const CartPage = () => {
  const { cartItems, clearCart } = useCart();
  const [actualIds, setActualIds] = useState([]);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { userId } = useAuth();

  useEffect(() => {
    const fetchActualIds = async () => {
      try {
        const ids = [];
        for (const product of cartItems) {
          const response = await axios.get(
            `http://localhost:8080/products?name=${encodeURIComponent(
              product.title
            )}`
          );
          const foundProduct = response.data.find(
            (p) => p.name === product.title
          );
          if (foundProduct) {
            ids.push(foundProduct.id);
          }
        }
        setActualIds(ids);
      } catch (error) {
        console.error("Error fetching actual IDs:", error);
      }
    };

    fetchActualIds();
  }, [cartItems]);

  const handleCheckout = async () => {
    try {
      const order = {
        clientId: userId,
        address: address,
        phoneNumber: phoneNumber,
        productIdQuantityMap: {},
      };

      cartItems.forEach((item, index) => {
        order.productIdQuantityMap[actualIds[index]] = item.quantity;
      });

      const response = await axios.post(
        "http://localhost:8080/createOrder",
        order
      );

      console.log("Order created successfully:", response.data);
      clearCart();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <NavBar />
        <div className="flex flex-col">
          <h1 className="flex justify-center mt-20 text-4xl text-violet-500">
            Cart
          </h1>

          <div className="flex flex-col sm:flex-row justify-center mx-5 sm:mx-0 mb-20 mt-5 lg:mt-12 gap-3">
            <div className="flex flex-col w-full sm:w-auto">
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

            {cartItems.length > 0 && (
              <div className="bg-gray-200 p-4 w-full sm:w-72 rounded-r-lg shadow-md flex flex-col justify-between">
                <div className="">
                  <h1 className="text-black text-2xl font-bold mb-4">
                    Summary
                  </h1>
                  <div className="flex justify-between mb-2">
                    <p className="text-lg text-black">Subtotal:</p>
                    <p className="text-lg text-black">
                      BGN {RoundedTwoDecimals(calculateSubtotal(cartItems))}
                    </p>
                  </div>

                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="input input-bordered mb-2"
                  />
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="input input-bordered mb-4"
                  />
                </div>
                <button
                  onClick={handleCheckout}
                  className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 font-medium"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const calculateSubtotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default CartPage;
