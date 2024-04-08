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

function App() {
  const [userData, setUserData] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home status={userData} setStatus={setUserData} />}
        />
        {/* ADMIN ONLY  */}
        <Route
          path="/add-product"
          element={<AddProducts status={userData} setStatus={setUserData} />}
        />
        <Route
          path="/product"
          element={<Product status={userData} setStatus={setUserData} />}
        />
        <Route
          path="/about"
          element={<AboutPage status={userData} setStatus={setUserData} />}
        />

        <Route
          path="/product/product-info"
          element={<ShopInside status={userData} setStatus={setUserData} />}
        />
        {userData ? (
          <>
            <Route
              path="/profile"
              element={<Profile isLoggedIn={setUserData} />}
            />
            <Route
              path="/card"
              element={<CartPage isLoggedIn={setUserData} />}
            />
            <Route
              path="/orders"
              element={<Orders isLoggedIn={setUserData} />}
            />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login isLoggedIn={setUserData} />} />
            <Route
              path="/signup"
              element={<SignUp isLoggedIn={setUserData} />}
            />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
