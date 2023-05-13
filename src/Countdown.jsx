import React from 'react';
import { useState } from 'react';
import "../src/Countdown.css";



const Countdown = () => {

  const [days, setDays] = useState(0);

  const [hours, setHours] = useState(0);

  const [minutes, setMinutes] = useState(0);

  const [seconds, setSeconds] = useState(0);

  const [InputDate, setInputDate] = useState("1st jan 2023");

  const[CurrentDate,setCurrentDate] = useState(InputDate);

  return (
    <div className="countdown_container">

      <div className="countdown_values">
        <div className="countdown_value">
          <p className="big_text">{days}</p>
          <span>days</span>
        </div>
        <div className="countdown_value">
          <p className="big_text">{hours}</p>
          <span>hours</span>
        </div>
        <div className="countdown_value">
          <p className="big_text">{minutes}</p>
          <span>minutes</span>
        </div>
        <div className="countdown_value">
          <p className="big_text">{seconds}</p>
          <span>seconds</span>
        </div>
      </div>
      <div className="countdown-input-button">
        <input className='countdown-input' />
        <button className='countdown-btn'>Countdown</button>
      </div>

    </div>
  );
};

export default Countdown

