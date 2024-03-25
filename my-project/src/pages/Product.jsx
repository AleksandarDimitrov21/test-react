import React from "react";
import Shop from "../components/ui/Shop";
import NavBar from "../components/ui/NavBar";
import NavBarDiff from "../components/ui/NavBarDiff";
const Product = ({ status, setStatus }) => {
  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="overflow-hidden h-16">
          <NavBarDiff isLoggedIn={status} setIsLoggedIn={setStatus} />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row gap-5">
            <Shop />
            <Shop />
            <Shop />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
