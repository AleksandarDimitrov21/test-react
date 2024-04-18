import React, { useState } from "react";
import UserInput from "../components/ui/UserInput";
import Buttom from "../components/ui/Buttom";
import { useNavigate } from "react-router-dom";
import { isAlphanumeric } from "../validation/Validation";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext ";
import { jwtDecode } from "jwt-decode";
import { useCart } from "../CartContext";
import axios from "axios";

const Login = () => {
  const { handleLogin } = useAuth();
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showCaution, setShowCaution] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username" || name === "password") {
      setShowCaution(!isAlphanumeric(value));
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/login", formData).then(({ data }) => {
      handleLogin(data.userInfoDto);
      clearCart();
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-300 to-violet-200">
        <div className="flex justify-center items-center h-screen ">
          <div className="border-x-1 shadow-lg w-auto rounded-xl py-5 bg-white">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-auto mx-auto px-8"
            >
              <h1 className="text-3xl font-bold text-black mb-4">Log in:</h1>
              <UserInput
                type={"text"}
                placeholder={"Username:"}
                name={"username"}
                value={formData.username}
                onChange={handleChange}
              />
              <UserInput
                type={"password"}
                placeholder={"Password:"}
                name={"password"}
                value={formData.password}
                onChange={handleChange}
              />
              <h6 className="text-xs">
                Don't have an account?{" "}
                <Link to="/signup" className="text-violet-700">
                  Sign Up
                </Link>
              </h6>
              {showCaution && (
                <p className="text-red-500 text-xs">
                  Incorrect Username or Password.
                </p>
              )}
              <Buttom textMessage={"Login now"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
