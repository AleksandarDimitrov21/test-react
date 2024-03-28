import React from "react";
import BackgroundPhoto from "../components/ui/BackgroundPhoto";
import Avatar from "../components/ui/Avatar";
const Profile = () => {
  return (
    <>
      <div className="bg-white h-screen">
        <BackgroundPhoto />
        <div className="w-full h-0 flex justify-center items-center">
          <Avatar />
        </div>
        <div className="h-auto text-center mt-32">
          <h1 className="text-4xl font-semibold text-black">Angel Sasho</h1>
          <h2>Smart Home member since May 2022</h2>
        </div>
        <div className="flex justify-center  mt-5">
          <div className="bg-gray-100 w-1/2 rounded-xl py-12 mb-5">
            <h1 className="text-3xl font-bold  px-8">
              <span className="text-violet-500">Information</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
