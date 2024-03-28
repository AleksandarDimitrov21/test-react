import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import { useState } from "react";
import SignUp from "./pages/SignUp";
import Shop from "./components/ui/Shop";
import Product from "./pages/Product";
import AboutPage from "./pages/AboutPage";
import Profile from "./pages/Profile";
import CartPage from "./pages/CartPage";

function App() {
  const [userData, setUserData] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home status={userData} setStatus={setUserData} />}
        />
        <Route
          path="/product"
          element={<Product status={userData} setStatus={setUserData} />}
        />
        <Route
          path="/about"
          element={<AboutPage status={userData} setStatus={setUserData} />}
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
