import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavPhoto from "./NavPhoto";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../auth/AuthContext ";

const Profile = () => {
  const { handleLogout } = useAuth();
  const [userDetail, setUserDetail] = useState(null);

  const { userType, userId } = useAuth();
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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (jwtToken) {
      fetchUserDetails();
    }
  }, [userId]);

  return (
    <div className="dropdown dropdown-end ">
      <NavPhoto imageUrl={userDetail?.photo} />
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52"
      >
        <div className="ml-3 ">
          <button className="justify-between text-black ">
            {userId && <Link to={`profile/${userId}`}>Profile</Link>}
          </button>
        </div>
        {(userType === "ADMIN" || userType === "EMPLOYEE") && (
          <>
            <div className="ml-3 ">
              <button className="justify-between text-black ">
                <Link to="/orders">Orders</Link>
              </button>
            </div>

            <div className="ml-3 ">
              <button className="justify-between text-black ">
                <Link to="/product-display">Product Info</Link>
              </button>
            </div>
          </>
        )}
        {userType === "ADMIN" && (
          <>
            <div className="ml-3 ">
              <button className="justify-between text-black ">
                <Link to="/product-employee">Deleted products</Link>
              </button>
            </div>
            <div className="ml-3 ">
              <button className="justify-between text-black ">
                <Link to="/users">Users</Link>
              </button>
            </div>
          </>
        )}
        <div className="ml-3 ">
          <button className="justify-between text-black ">
            <Link to="/revenue">Revenue</Link>
          </button>
        </div>

        <div className="text-black ml-3">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </ul>
    </div>
  );
};

export default Profile;
