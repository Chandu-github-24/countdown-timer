 
import React from 'react';
import { useState, useEffect } from 'react';
import "../src/Countdown.css";



const Countdown = () => {

  const [days, setDays] = useState(0);

  const [hours, setHours] = useState(0);

  const [minutes, setMinutes] = useState(0);

  const [seconds, setSeconds] = useState(0);

  const [InputDate, setInputDate] = useState("15 may 2023");

  const [CurrentDate, setCurrentDate] = useState(InputDate);




  useEffect(() => {
    const changingdate = new Date(InputDate);
    const currentdate = new Date();
    const totalseconds = (changingdate - currentdate) / 1000;
    setDays(formatTime(Math.floor(totalseconds / 3600 / 24)));

    setHours(Math.floor(totalseconds / 3600) % 24);
    setMinutes(Math.floor(totalseconds / 60) % 24);
    setSeconds(Math.floor(totalseconds % 60));
  }, [CurrentDate, InputDate]);
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  const onChangeHandler = (event) => {
    setInputDate(event.target.value)
  }
  const onClickHandler = () => {
    setCurrentDate(InputDate);

  }
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
        <input className='countdown-input' onChange={onChangeHandler} />
        <button className='countdown-btn' onClick={onClickHandler}>Countdown</button>
      </div>

    </div>

  );

};

export default Countdown


