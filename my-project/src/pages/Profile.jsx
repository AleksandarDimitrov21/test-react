import React from "react";
import BackgroundPhoto from "../components/ui/photoComponents/BackgroundPhoto";
import Avatar from "../components/ui/photoComponents/Avatar";
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
        <div className="mt-5 flex justify-center items-center ">
          <div className="w-1/2">
            <div className="hero bg-gray-200 h-full rounded-lg py-5">
              <div className="flex-col lg:flex-row-reverse">
                <div>
                  <h1 className="text-5xl font-bold text-violet-500">
                    About us:
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
