import NavBar from "../components/ui/NavBar";
import WholePagePhoto from "../components/ui/WholePagePhoto";
import Tester from "../components/ui/Tester";
import Footer from "../components/ui/Footer";
import ContactForm from "../contact/ContactForm";
import Carousel from "../components/ui/Carousel";
import FAQ from "../components/ui/FAQ";
import Countdown from "../components/ui/Countdown";
import ScrollVelocity from "../components/ui/animation/ScrollVelocity";
import { Element } from "react-scroll";
import SeeProduct from "../components/ui/SeeProduct";
import Location from "../components/ui/Location";
import About from "../components/ui/About";
import Loading from "../components/ui/Loading";
import { useEffect, useState } from "react";

const Home = ({ status, setStatus }) => {
  const [isLoading, setIsLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-white">
          <div className="overflow-hidden h-screen">
            <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
            <WholePagePhoto />
          </div>
          <SeeProduct />
          <About />
          <Element name="FAQs" className="element">
            <FAQ />
          </Element>
          <ContactForm />
          <Countdown />
          <Location />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
