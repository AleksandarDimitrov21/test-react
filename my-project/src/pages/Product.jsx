import React from "react";
import Shop from "../components/ui/Shop";
import NavBar from "../components/ui/NavBar";
import NavBarDiff from "../components/ui/NavBarDiff";
import Drawer from "../components/ui/Drawer";
const Product = ({ status, setStatus }) => {
  return (
    <>
      <div className="bg-gray-100 flex">
        <div className="overflow-hidden h-16 ">
          <NavBarDiff isLoggedIn={status} setIsLoggedIn={setStatus} />
        </div>
        <div className="flex flex-col flex-grow ">
          <h1 className="flex justify-start mt-20 pl-10 text-4xl text-violet-500">
            Products:
          </h1>

          <div>
            <div className="flex">
              <div>
                <Drawer />
              </div>

              <div className="flex flex-wrap justify-between px-20 gap-5">
                <Shop />
                <Shop />
                <Shop />
                <Shop />
              </div>
            </div>
          </div>

          {/* Shops */}
        </div>
      </div>
    </>
  );
};

export default Product;
