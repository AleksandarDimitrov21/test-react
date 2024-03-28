import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleExit = () => {
    setIsLoggedIn(false);
    console.log("hello");
  };
  return (
    <div className="dropdown dropdown-end ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full  ">
          <img alt="Profile" src="src\assets\me.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52"
      >
        <div className="ml-3 ">
          <button className="justify-between text-black ">
            <Link to="/profile">Profile</Link>
          </button>
        </div>

        <div className="text-black ml-3">
          <button onClick={handleExit}>Logout</button>
        </div>
      </ul>
    </div>
  );
};

export default Profile;
