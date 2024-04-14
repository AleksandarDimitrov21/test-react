import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import AboutPage from "./pages/AboutPage";
import Profile from "./pages/Profile";
import CartPage from "./components/ui/productComponents/CartPage";
import ShopInside from "./components/ui/productComponents/ShopInside";
import AddProducts from "./adminPages/AddProducts";
import Orders from "./adminPages/Orders";
import AddUser from "./adminPages/AddUser";
import ProductInfo from "./adminPages/ProductInfo";
import { useAuth } from "./auth/AuthContext ";
import ProtectedRoute from "./auth/ProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/users" element={<AddUser />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/product/:id" element={<ShopInside />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/card" element={<CartPage />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
