import NavBar from "../components/ui/navigation/NavBar";

import WholePagePhoto from "../components/ui/photoComponents/WholePagePhoto";
import Footer from "../components/ui/homeComponents/Footer";
import ContactForm from "../contact/ContactForm";
import FAQ from "../components/ui/FAQ/FAQ";

import { Element } from "react-scroll";
import SeeProduct from "../components/ui/productComponents/SeeProduct";
import Location from "../components/ui/homeComponents/Location";
import About from "../components/ui/homeComponents/About";
import Loading from "../components/ui/loading/Loading";
import { useEffect, useState } from "react";
import ScrollButton from "../components/ui/ScrollButton";

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

          <ScrollButton />
          <Element name="FAQs" className="element">
            <FAQ />
          </Element>
          <ContactForm />

          <Location />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
