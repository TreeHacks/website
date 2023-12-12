import React, { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDateUTCString) => {
  // Convert the target UTC date string to a Date object
  const targetDateUTC = new Date(targetDateUTCString);

  // Get the current time in UTC
  const nowUTC = new Date();

  // Calculate the difference in milliseconds
  const difference = targetDateUTC - nowUTC;

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

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  // Destructure the timeLeft object
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="countdown">
      <h1 className='xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white'>
        {days}d {hours}h {minutes}m {seconds}s
      </h1>
    </div>
  );
};

export default Countdown;

