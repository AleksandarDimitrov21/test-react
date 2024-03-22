import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home status={userData} setStatus={setUserData} />}
        />
        {userData ? (
          <>{/* STATISTIKA SHTE E  TUKA */}</>
        ) : (
          <>
            <Route path="/login" element={<Login isLoggedIn={setUserData} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
