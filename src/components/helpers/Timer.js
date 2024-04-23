import React, { useState, useEffect } from "react";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "#6279FF",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        fontSize: "20px",
      }}
    >
      <div>{/* <h3>POS</h3> */}</div>
      <div>
        <h3>CASHR</h3>
      </div>
      <div> {currentTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default Timer;
