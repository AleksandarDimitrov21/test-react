import React, { useState, useEffect } from "react";
import BackgroundPhoto from "../components/ui/photoComponents/BackgroundPhoto";
import Avatar from "../components/ui/photoComponents/Avatar";
import Stat from "../components/profileComponents/Stat";
import Users from "../components/profileComponents/Users";
import Order from "../components/profileComponents/PreviousOrder";
import axios from "axios";
import { useAuth } from "../auth/AuthContext ";
import { Link } from "react-router-dom";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState(null);
  const { userType, userId } = useAuth();
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      console.error("No JWT token found.");
      return;
    }
    if (userType === "ADMIN") {
      try {
        const response = await axios.get("http://localhost:8080/user", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };
  useEffect(() => {
    if (!userId) {
      return;
    }
    const jwtToken = localStorage.getItem("jwtToken");
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        setUserDetail(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (jwtToken) {
      fetchUserDetails();
    }
  }, [userId]);

  return (
    <>
      <div className="bg-white min-h-screen">
        <BackgroundPhoto />
        <div className="w-full h-0 flex justify-center items-center">
          <Link to="/change-photo">
            {userDetail?.photo ? (
              <Avatar photoURL={userDetail?.photo} />
            ) : (
              <Avatar photoURL="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" />
            )}
          </Link>
        </div>
        <div className="h-auto text-center mt-32">
          <h1 className="text-4xl font-semibold text-black">
            {userDetail ? userDetail.name : "Loading..."}
          </h1>
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
              {(userType === "ADMIN" || userType === "EMPLOYEE") && (
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
