import React, { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate) => {
  // UTC offset for Pacific Standard Time (PST) is -8 hours
  const utcOffset = -8;

  // Convert target date to UTC and adjust for PST
  const targetDateUTC = new Date(targetDate).getTime() + (utcOffset * 60 * 60 * 1000);

  // Get current UTC time
  const nowUTC = new Date().getTime();

  // Calculate the difference
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
        {timeLeft.value} {timeLeft.unit}
      </h1>
    </div>
  );
