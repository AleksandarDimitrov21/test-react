import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavPhoto from "./NavPhoto";
import { useAuth } from "../../../auth/AuthContext ";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const [avatarImageUrl, setAvatarImageUrl] = useState(
    localStorage.getItem("avatarImageUrl") ||
      "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
  );

  const updateAvatarImageUrl = (newImageUrl) => {
    setAvatarImageUrl(newImageUrl);
    localStorage.setItem("avatarImageUrl", newImageUrl);
  };
  return (
    <div className="dropdown dropdown-end ">
      <NavPhoto imageUrl={avatarImageUrl} />
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52"
      >
        <div className="ml-3 ">
          <button className="justify-between text-black ">
            <Link to="/profile">Profile</Link>
          </button>
        </div>
        <div className="ml-3 ">
          <button className="justify-between text-black ">
            <Link to="/orders">Orders</Link>
          </button>
        </div>
        <div className="ml-3 ">
          <button className="justify-between text-black ">
            <Link to="/users">Users</Link>
          </button>
        </div>
        <div className="ml-3 ">
          <button className="justify-between text-black ">
            <Link to="/product-display">Product Info</Link>
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
