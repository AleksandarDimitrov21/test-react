import { Link, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import ProfileNav from "./ProfileNav";
import Card from "../Card";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);
  return (
    <div className="navbar bg-transparent fixed z-50 flex items-center justify-center ">
      <div className="flex items-center bg-gray-300 opacity-95 rounded-full py-1.5 shadow">
        <div className="ml-2 mr-2">
          <Link to="/">
            <h1
              className={`btn ${
                currentPage === "/"
                  ? "bg-white text-black"
                  : "bg-transparent text-black"
              } border-none text-xl cursor-pointer hover:bg-white font-semibold rounded-full shadow-none`}
            >
              Home
            </h1>
          </Link>
        </div>
        <div className="mx-2">
          <Link to="/product">
            <h1
              className={`btn ${
                currentPage === "/product"
                  ? "bg-white text-black"
                  : "bg-transparent text-black"
              } border-none text-xl cursor-pointer hover:bg-white font-semibold rounded-full shadow-none`}
            >
              Products
            </h1>
          </Link>
        </div>
        <div className="mx-2">
          <Link to="/about">
            <h1
              className={`btn ${
                currentPage === "/about"
                  ? "bg-white text-black"
                  : "bg-transparent text-black"
              } border-none text-xl cursor-pointer hover:bg-white font-semibold rounded-full shadow-none`}
            >
              About
            </h1>
          </Link>
        </div>
        <div>
          {!isLoggedIn && (
            <div className="mr-2">
              <Link to="/login">
                <h1
                  className={`btn ${
                    currentPage === "/login"
                      ? "bg-white text-black"
                      : "bg-transparent text-black"
                  } border-none text-xl cursor-pointer hover:bg-white font-semibold rounded-full shadow-none`}
                >
                  Login
                </h1>
              </Link>
            </div>
          )}
        </div>
        {isLoggedIn && (
          <div className="mr-2">
            <Card quantity={1} price={300} />
          </div>
        )}
        {isLoggedIn && (
          <div className="mr-1 ">
            <ProfileNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
