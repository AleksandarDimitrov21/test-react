import React from "react";
import NavBar from "../components/ui/NavBar";
import WholePagePhoto from "../components/ui/WholePagePhoto";
import Tester from "../components/ui/Tester";
import Footer from "../components/ui/Footer";
import ContactForm from "../contact/ContactForm";
const Home = ({ status, setStatus }) => {
  return (
    <>
      <div className="overflow-hidden h-screen">
        <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
        <WholePagePhoto />
      </div>
      <Tester></Tester>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
