import React from "react";
import NavBar from "../components/ui/NavBar";
import WholePagePhoto from "../components/ui/WholePagePhoto";
import Tester from "../components/ui/Tester";
import Footer from "../components/ui/Footer";
import ContactForm from "../contact/ContactForm";
import Carousel from "../components/ui/Carousel";
import FAQ from "../components/ui/FAQ";
import Countdown from "../components/ui/Countdown";
import ScrollVelocity from "../components/ui/animation/ScrollVelocity";
const Home = ({ status, setStatus }) => {
  return (
    <>
      <div className="overflow-hidden h-screen">
        <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
        <WholePagePhoto />
      </div>
      <FAQ />
      <ContactForm />
      <Countdown />
      <Footer />
    </>
  );
};

export default Home;
