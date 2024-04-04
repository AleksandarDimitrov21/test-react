import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Buttom from "../components/ui/Buttom";
import { isNotEmpty, isValidEmail } from "../validation/Validation";

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm("service_8ppjequ", "template_d8v6a9m", form.current, {
          publicKey: "bVYZxNffv1ix7MCOe",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const validateForm = () => {
    const { from_name, from_email, message } = form.current;

    const errors = {};

    if (!isNotEmpty(from_name.value)) {
      errors.name = "Name is required";
    }

    if (!isNotEmpty(from_email.value)) {
      errors.email = "Email is required";
    } else if (!isValidEmail(from_email.value)) {
      errors.email = "Invalid email format";
    }

    if (!isNotEmpty(message.value)) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  return (
    <div className="flex justify-center bg-white mt-5">
      <div className="bg-gray-100 rounded-xl px-28 py-12 mb-5 ">
        <h1 className="flex justify-center text-3xl font-bold text-black  ">
          <span className="border-b border-black pb-1">Contact us:</span>
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-80 rounded-xl "
        >
          <label>Name:</label>
          <input
            type="text"
            name="from_name"
            className={`rounded-md h-12 text-black bg-white hover:bg-neutral-100 pl-2 ${
              errors.name && "border border-red-500"
            }`}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <label>Email:</label>
          <input
            type="email"
            name="from_email"
            className={`h-12 rounded-md pl-2 bg-white hover:bg-neutral-100 text-black ${
              errors.email && "border border-red-500"
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <label>Message:</label>
          <textarea
            name="message"
            className={`rounded-md h-32 max-h-80 pl-2 bg-white hover:bg-neutral-100 text-black ${
              errors.message && "border border-red-500"
            }`}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          <Buttom
            textMessage={"Send"}
            className="btn bg-white hover:bg-neutral-100"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
