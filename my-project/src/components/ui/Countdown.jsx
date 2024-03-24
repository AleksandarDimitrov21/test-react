import React, { useEffect, useState } from "react";
import Buttom from "./Buttom";
import ScrollVelocity from "./animation/ScrollVelocity";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const futureDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 3,
      currentDate.getDate()
    );
    const difference = futureDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex justify-center h-72 mb-5">
      <div className="bg-violet-700 rounded-xl w-8/12 pt-3 px-8 text-white">
        <h1 className="text-center text-4xl mb-8">Don't miss the promo:</h1>
        <div className="flex justify-center gap-5 text-center">
          <div className="flex flex-col p-4 bg-violet-600 rounded-box">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.days }}></span>
            </span>
            <span className="text-lg">days</span>
          </div>
          <div className="flex flex-col p-4 bg-violet-600 rounded-box">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.hours }}></span>
            </span>
            <span className="text-lg">hours</span>
          </div>
          <div className="flex flex-col p-4 bg-violet-600 rounded-box">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.minutes }}></span>
            </span>
            <span className="text-lg">min</span>
          </div>
          <div className="flex flex-col p-4 bg-violet-600 rounded-box">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.seconds }}></span>
            </span>
            <span className="text-lg">sec</span>
          </div>
        </div>
        <div className="flex justify-center gap-5 my-5 ">
          <a className="btn relative flex justify-center  bg-white py-3 px-6 rounded-lg text-gray-800">
            Sign me up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
