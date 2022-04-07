import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';
import discountIcon from '../../assets/images/Discount.svg';
import "./CountDownTimer.css";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Discount expired</span>
    </div>
  );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
        <img src={discountIcon} alt="discountIcon" />
        <p>&nbsp;&nbsp;&nbsp;<b>50%</b> discount only valid for&nbsp;</p>
        <b><DateTimeDisplay value={hours} /></b>
        <p>:</p>
        <b><DateTimeDisplay value={minutes} /></b>
        <p>:</p>
        <b><DateTimeDisplay value={seconds} /></b>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [ hours, minutes, seconds] = useCountdown(targetDate);

  if (hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <div className="sticky">
      <ShowCounter
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      </div>
    );
  }
};

export default CountdownTimer;