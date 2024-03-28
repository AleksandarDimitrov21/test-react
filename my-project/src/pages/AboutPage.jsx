import React from "react";
import NavBar from "../components/ui/NavBar";
import PromoSlide from "../components/ui/PromoSlide";

const AboutPage = ({ status, setStatus }) => {
  return (
    <>
      <div className="bg-white flex h-screen">
        <div className="overflow-hidden h-16 ">
          <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
        </div>
        <div>
          <div className="flex  justify-center items-center w-full ">
            <PromoSlide />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
