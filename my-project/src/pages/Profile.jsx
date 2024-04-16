import React, { useState, useEffect } from "react";
import BackgroundPhoto from "../components/ui/photoComponents/BackgroundPhoto";
import Avatar from "../components/ui/photoComponents/Avatar";
import Stat from "../components/profileComponents/Stat";
import Users from "../components/profileComponents/Users";
import Order from "../components/profileComponents/PreviousOrder";
import axios from "axios";
import { useAuth } from "../auth/AuthContext ";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const { userType } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        <BackgroundPhoto />
        <div className="w-full h-0 flex justify-center items-center">
          <Avatar />
        </div>
        <div className="h-auto text-center mt-32">
          <h1 className="text-4xl font-semibold text-black">{name}</h1>
          <h2>Upload your own picture</h2>
        </div>
        <div className="mt-5">
          <div>
            <div
              className="hero h-96 relative"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/originals/7e/28/60/7e28602ba1959db39fa98d84655fe7a2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-10 absolute inset-0"></div>
              <div className="hero-content flex justify-center items-center text-white">
                <div className="max-w-md text-center">
                  <h1 className="mb-5 text-4xl font-bold text-zinc-700">
                    Information
                  </h1>
                  <Stat />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mt-5">
              {userType === "ADMIN" && (
                <table className="table bg-zinc-800 rounded-none mb-5">
                  <Users users={users} />
                </table>
              )}
            </div>

            <div className=" mx-5">
              <h1 className="text-2xl">Recently bought:</h1>
              <Order
                status={"Delivered"}
                title={"Robot"}
                description={"It cleans."}
                price={"BGN 200"}
              />
              <Order
                status={"Delivered"}
                title={"Robot"}
                description={"It cleans."}
                price={"BGN 200"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
