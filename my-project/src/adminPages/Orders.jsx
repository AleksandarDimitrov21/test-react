import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders: ", error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-300 to-violet-200 min-h-screen">
      <div className="container mx-auto pt-24">
        <Link to="/" className="absolute top-0 right-0 m-4">
          <button className="text-md text-black bg-white hover:bg-violet-300 border-none font-bold rounded-full p-3">
            Home
          </button>
        </Link>
        <div className="bg-white rounded-lg shadow-lg">
          <table className="w-full text-center text-gray-800">
            <thead>
              <tr className="text-black">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Client Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Order Date</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.client.name}</td>
                  <td className="border px-4 py-2">{order.address}</td>
                  <td className="border px-4 py-2">{order.phoneNumber}</td>
                  <td className="border px-4 py-2">
                    {new Date(order.orderDateTime).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="border px-4 py-2">{order.value}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
