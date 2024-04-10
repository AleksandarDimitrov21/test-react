import React, { useState, useEffect } from "react";
import BackgroundPhoto from "../components/ui/photoComponents/BackgroundPhoto";
import Avatar from "../components/ui/photoComponents/Avatar";
import Stat from "../components/profileComponents/Stat";
import Users from "../components/profileComponents/Users";
import axios from "axios";

const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [users, setUsers] = useState([]);
  const [isCustomer, setCustomer] = useState(false);
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

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/user/${userId}`
      );
      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        console.log(`User with ID ${userId} deleted successfully.`);
      } else {
        console.error(`Failed to delete user with ID ${userId}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
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
                    <th className="text-lg">Actions</th>
                  </tr>
                </thead>
                <Users users={users} onDeleteUser={handleDeleteUser} />
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
  );
};

export default Profile;
