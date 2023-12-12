import React, { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate) => {
  // Convert the target date to a Date object in the user's local time zone
  const targetDateLocal = new Date(targetDate);

  // Adjust the target time to 12 AM (midnight) PST
  targetDateLocal.setHours(0, 0, 0, 0); // Set the time to midnight
  const offsetPST = 8; // PST is UTC-8 hours
  targetDateLocal.setHours(targetDateLocal.getHours() + offsetPST);

  // Get the current time in UTC
  const nowUTC = new Date();

  // Calculate the difference in milliseconds
  const difference = targetDateLocal - nowUTC;

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

