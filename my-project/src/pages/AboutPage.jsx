import React from "react";
import NavBar from "../components/ui/navigation/NavBar";

const AboutPage = ({ status, setStatus }) => {
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
            <div className="w-/6 flex justify-center text-center">
              <h2 className="font bold text-2xl mb-5 text-black font-serif">
                Our aim is to provide accessible devices to everybody who needs
                it.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
