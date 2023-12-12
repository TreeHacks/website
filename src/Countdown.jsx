import React, { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    console.error('Target date is either invalid or in the past');
  }

  return timeLeft;
};

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  if (!days && !hours && !minutes && !seconds) {
    return <div>Loading...</div>; // or any placeholder
  }

  return (
    <div className="countdown">
      <h1 className='xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white'>
        {days}d {hours}h {minutes}m {seconds}s
      </h1>
    </div>
  );
};

export default Countdown;
