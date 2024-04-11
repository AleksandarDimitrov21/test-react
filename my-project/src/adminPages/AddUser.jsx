import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Forms from "./Forms";

const AddUser = () => {
  const [user, setUser] = useState({
    photo: "",
    name: "",
    email: "",
    username: "",
    password: "",
    userType: "",
  });
  return <div>AddUser</div>;
};

export default AddUser;
