import React from "react";
import UserInput from "../components/ui/UserInput";
import { Link } from "react-router-dom";
import Buttom from "../components/ui/Buttom";
import { isValidEmail } from "../validation/Validation";
import { useState } from "react";
const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [showCaution, setShowCaution] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-gradient-to-r from-pink-100 to-orange-200">
        <div className="flex justify-center items-center h-screen">
          <div className="border-x-1 shadow-lg w-auto rounded-xl py-5 bg-white">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-auto mx-auto px-16"
            >
              <h1 className="text-3xl font-bold text-black mb-4">Sign Up:</h1>{" "}
              <UserInput
                type={"text"}
                placeholder={"Username:"}
                name={"username"}
                value={values.username}
                onChange={handleChange}
              />
              <UserInput
                type={"text"}
                placeholder={"Email:"}
                name={"email"}
                value={values.email}
                onChange={handleChange}
              />
              <UserInput
                type={"password"}
                placeholder={"Password:"}
                name={"password"}
                value={values.password}
                onChange={handleChange}
              />
              {showCaution && (
                <p className="text-red-500 text-xs">
                  Incorrect Username or Password.
                </p>
              )}
              <p className="text-xs">
                Already have an account?{" "}
                <Link to="/login" className="text-pink-500">
                  Log in
                </Link>
              </p>
              <Buttom textMessage={"Sign Up now"} />{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
