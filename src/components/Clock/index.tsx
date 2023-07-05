import { useEffect, useState } from 'react';

import Style from './clock.module.scss';

const Clock = () => {
  const [time, setTime] = useState({
    date: new Date(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        date,
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number: number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <div className={Style.clock}>
      <span className={Style.clock__time}>{time.date.toDateString()}</span>
      <span>{convertToTwoDigit(time.hours)}:</span>
      <span>{convertToTwoDigit(time.minutes)}:</span>
      <span>{convertToTwoDigit(time.seconds)}</span>
      <span>{time.hours >= 12 ? ' PM' : ' AM'}</span>
    </div>
  );
};

export default Clock;
