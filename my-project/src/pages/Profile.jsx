import React from "react";
import BackgroundPhoto from "../components/ui/photoComponents/BackgroundPhoto";
import Avatar from "../components/ui/photoComponents/Avatar";
import Stat from "../components/profileComponents/Stat";
import Order from "../components/profileComponents/PreviousOrder";
import Users from "../components/profileComponents/Users";
import { useState, useEffect } from "react";
const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isCustomer, setCustomer] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/user");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUsers(data);
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
          <h1 className="text-4xl font-semibold text-black">Angel Stoynov</h1>
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

            {isAdmin ? (
              <div className="overflow-x-auto mt-5">
                <table className="table bg-zinc-800 rounded-none mb-5">
                  <thead>
                    <tr>
                      <th className="text-lg">Name</th>
                      <th className="text-lg">Username</th>
                      <th className="text-lg">Email</th>
                    </tr>
                  </thead>
                  <Users users={users} />
                </table>
              </div>
            ) : null}
            {isCustomer ? (
              <div className=" mx-5">
                <h1 className="text-2xl">Recently bought:</h1>
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
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
