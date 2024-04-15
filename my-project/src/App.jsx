import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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

import ProtectedRoute from "./auth/ProtectedRoute";
import EditProducts from "./adminPages/EditProducts";
import { CartProvider } from "./CartContext";
import ProductEmployee from "./adminPages/ProductEmployee";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/add-product"
            element={
              <ProtectedRoute>
                <AddProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <AddUser />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/product/:id" element={<ShopInside />} />

          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product-display"
            element={
              <ProtectedRoute>
                <ProductInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/card"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-product/:id"
            element={
              <ProtectedRoute>
                <EditProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/card"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product-employee"
            element={
              <ProtectedRoute>
                <ProductEmployee />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
