import "./styles.css";

import React, { useState } from "react";
import "./index.js";
// import './index.css';
// import "./click.css";

const App = () => {
  // const state = useState();

  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1> {count + " " + "Times"} </h1>
      <button onClick={IncNum}>You say's SubhanAllah</button>
    </>
  );
};

// time button system 🤪

const App1 = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  return (
    <>
      <h1> {ctime} </h1>
      <button onClick={UpdateTime}> Catch current Time </button>
    </>
  );
};

// digital clock

const App2 = () => {
  let time1 = new Date().toLocaleTimeString();

  const [ctime1, setCtime1] = useState(time1);

  const UpdateTime1 = () => {
    time1 = new Date().toLocaleTimeString();
    setCtime1(time1);
  };

  setInterval(UpdateTime1, 1000);
  return (
    <>
      <h2>current time</h2>
      <h1> {ctime1} </h1>
    </>
  );
};

export { App, App1, App2 };
