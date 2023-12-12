import React, { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate) => {
  const targetDateUTC = new Date(targetDate).getTime();
  const nowUTC = new Date().getTime();
  const difference = targetDateUTC - nowUTC;

  let timeLeft = {};
  if (difference > 0) {
    const minutesLeft = Math.floor(difference / (1000 * 60));
    const hoursLeft = Math.floor(minutesLeft / 60);
    const daysLeft = Math.floor(hoursLeft / 24);

    if (daysLeft > 0) {
      timeLeft = { value: daysLeft, unit: daysLeft === 1 ? 'day' : 'days' };
    } else if (hoursLeft > 0) {
      timeLeft = { value: hoursLeft, unit: hoursLeft === 1 ? 'hour' : 'hours' };
    } else {
      timeLeft = { value: minutesLeft, unit: minutesLeft === 1 ? 'minute' : 'minutes' };
    }
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

  return (
    <div className="countdown">
      <h1 className='xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white'>
        {timeLeft.value} {timeLeft.unit}
      </h1>
    </div>
  );
};

export default Countdown;

