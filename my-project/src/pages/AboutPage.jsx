import React from "react";
import NavBar from "../components/ui/navigation/NavBar";
import Pagination from "../components/ui/aboutcomponent/Pagination";
import { useState } from "react";
import InfoCart from "../components/ui/aboutcomponent/InfoCart";

const AboutPage = ({ status, setStatus }) => {
  const [image, setImage] = useState(0);

  const handleImage = (index) => {
    setImage(index);
  };

  const renderImage = () => {
    switch (image) {
      case 0:
        return (
          <img
            src="src\assets\Elena.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      case 1:
        return (
          <img
            src="src\assets\glupost3.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      case 2:
        return (
          <img
            src="src\assets\glupost.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      case 3:
        return (
          <img
            src="src\assets\glupost.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      case 4:
        return (
          <img
            src="src\assets\glupost.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      case 5:
        return (
          <img
            src="src\assets\glupost.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        );
      default:
        return null;
    }
  };

  const renderText = () => {
    switch (image) {
      case 0:
        return (
          <>
            <h1 className="text-3xl mr-40 font-bold mb-5 text-violet-500">
              Elena Dobreva
            </h1>
            <InfoCart
              github={"https://github.com/ElenDobreva"}
              instagram={"https://www.instagram.com/edobreva24/?hl=en"}
              facebook={"https://www.facebook.com/elena.dobreva.7906"}
            />
          </>
        );
      case 1:
        return (
          <>
            <h1 className="text-3xl mr-40 font-bold mb-5 text-violet-500">
              Hristo Sotirov
            </h1>
            <InfoCart
              github={"https://github.com/HristoSotirov"}
              instagram={"https://www.instagram.com/hristo_r_sotirov/?hl=en"}
              facebook={
                "https://www.facebook.com/profile.php?id=100026897013303"
              }
            />
          </>
        );
      case 2:
        return (
          <>
            <h1 className="text-3xl mr-40 font-bold mb-5 text-violet-500">
              Martin Venev
            </h1>
            <InfoCart
              github={"https://github.com/GosuMarti"}
              instagram={"https://www.instagram.com/martin_venev/?hl=en"}
              facebook={
                "https://www.facebook.com/profile.php?id=100002093317420"
              }
            />
          </>
        );
      case 3:
        return (
          <>
            <h1 className="text-3xl mr-40 font-bold mb-5 text-violet-500">
              Alexandar Dimitrov
            </h1>
            <InfoCart
              github={"https://github.com/AleksandarDimitrov21"}
              instagram={"https://www.instagram.com/a_dimitrow_/?hl=en"}
              facebook={
                "https://www.facebook.com/profile.php?id=100008834714965"
              }
            />
          </>
        );
      case 4:
        return (
          <>
            <h1 className="text-3xl mr-40 font-bold mb-5 text-violet-500">
              Stoyan Ivanov
            </h1>
            <InfoCart
              github={"https://github.com/stiv03"}
              instagram={"https://www.instagram.com/s_ivanov22/?hl=en"}
              facebook={"https://www.facebook.com/stoyan.ivanov.9237"}
            />
          </>
        );
      case 5:
        return (
          <>
            <h1 className="text-3xl mr-40 font-bold mb-5 text-violet-500">
              Angel Stoynov
            </h1>
            <InfoCart
              github={"https://github.com/StoynovAngel"}
              instagram={"https://www.instagram.com/angelstoynovv/?hl=en"}
              facebook={
                "https://www.facebook.com/profile.php?id=100022110724481"
              }
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-white flex h-max">
        <div className="overflow-hidden h-16 ">
          <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
        </div>
        <div className="w-full">
          <div>
            <div
              className="hero h-80 w-full relative"
              style={{
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/001/815/239/non_2x/corporate-office-flat-illustration-vector.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-10 absolute inset-0"></div>
              <div className="hero-content flex justify-center items-center text-white">
                <div className="max-w-md text-center">
                  <h1 className="mb-5 text-5xl font-bold font-serif text-zinc-700">
                    About
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl mt-10 mb-5 font-semibold font-serif text-zinc-800">
              Who are we?
            </h1>
            <h2>
              We specialise in AI-powered devices, revolutionizing how you
              interact with technology.
            </h2>
            <h2>We embarked on this journey to create something meaningful.</h2>

            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/025/003/630/original/corporate-team-building-animation-animated-cartoon-office-people-give-high-five-isolated-colour-flat-line-2d-characters-4k-footage-white-background-alpha-channel-transparency-for-web-design-video.jpg"
              className="h-72 w-3/6 "
            />
            <div className="w-3/6 flex justify-center text-center">
              <h2 className="font bold text-2xl  text-black font-serif">
                Our aim is to provide accessible devices to everyone in need.
              </h2>
            </div>
            <h1 className="text-4xl mt-10 mb-5 font-semibold font-serif text-zinc-800">
              Meet our members
            </h1>
            <div className="rounded-lg">
              <div className="hero-content flex-col lg:flex-row-reverse">
                {renderImage()}
                <div>{renderText()}</div>
              </div>
              <div className="flex justify-center items-center mb-3">
                <Pagination diff={handleImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
