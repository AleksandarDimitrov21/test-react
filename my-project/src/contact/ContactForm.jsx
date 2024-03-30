import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Buttom from "../components/ui/Buttom";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
            className="rounded-md h-12 text-black bg-white hover:bg-neutral-100 pl-2"
          />
          <label>Email:</label>
          <input
            type="email"
            name="from_email"
            className="h-12 rounded-md pl-2 bg-white hover:bg-neutral-100 text-black "
          />
          <label>Message:</label>
          <textarea
            name="message"
            className="rounded-md h-32 max-h-80 pl-2 bg-white hover:bg-neutral-100 text-black"
          />
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
