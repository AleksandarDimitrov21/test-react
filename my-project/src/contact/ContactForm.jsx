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
    <div className="flex justify-center">
      <div className="bg-base-200 rounded-xl px-28 py-12 mb-5">
        <h1 className="flex justify-center text-3xl font-bold text-neutral-400">
          Contact us:
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-80 rounded-xl "
        >
          <label className="text-neutral-400">Name:</label>
          <input
            type="text"
            name="from_name"
            className="rounded-md h-12 text-white pl-2"
          />
          <label>Email:</label>
          <input
            type="email"
            name="from_email"
            className="h-12 rounded-md pl-2 text-white "
          />
          <label>Message:</label>
          <textarea
            name="message"
            className="rounded-md h-32 pl-2 text-white"
          />
          <Buttom textMessage={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
