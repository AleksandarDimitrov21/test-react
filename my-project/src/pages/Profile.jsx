import React from "react";
import BackgroundPhoto from "../components/ui/photoComponents/BackgroundPhoto";
import Avatar from "../components/ui/photoComponents/Avatar";
import Stat from "../components/profileComponents/Stat";
import Order from "../components/profileComponents/PreviousOrder";
const Profile = () => {
  return (
    <>
      <div className="bg-white h-max">
        <BackgroundPhoto />
        <div className="w-full h-0 flex justify-center items-center">
          <Avatar />
        </div>
        <div className="h-auto text-center mt-32">
          <h1 className="text-4xl font-semibold text-black">Angel Sasho</h1>
          <h2>Smart Home member since May 2022</h2>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <div className="w-full lg:w-1/2">
            <div className="hero bg-gray-100 h-full rounded-lg py-8 px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:mr-8">
                  <h1 className="text-4xl font-bold text-center lg:text-left text-violet-500 mb-4">
                    Information
                  </h1>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vehicula eros vitae justo fermentum, nec pulvinar lorem
                    facilisis. Integer convallis nunc sed nunc dictum, vitae
                    rhoncus arcu vestibulum.
                  </p>
                </div>
                <div className="mt-4 ">
                  <Stat />
                </div>
              </div>
            </div>
            <div className="mt-4 ">
              <h1>Recently bought:</h1>
              <Order
                status={"Delivered"}
                title={"Robot"}
                description={"It cleans."}
                price={"BGN 200"}
                image={
                  "https://s1.kaercher-media.com/mam/12696200/mainproduct/205903/d3.jpg"
                }
              />
              <Order
                status={"Delivered"}
                title={"Robot"}
                description={"It cleans."}
                price={"BGN 200"}
                image={
                  "https://s1.kaercher-media.com/mam/12696200/mainproduct/205903/d3.jpg"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
