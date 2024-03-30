import React from "react";
import NavBar from "../components/ui/navigation/NavBar";

const AboutPage = ({ status, setStatus }) => {
  return (
    <>
      <div className="bg-white flex h-svh">
        <div className="overflow-hidden h-16 ">
          <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
        </div>
        <div>
          <div className="flex  justify-center items-center w-full "></div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
