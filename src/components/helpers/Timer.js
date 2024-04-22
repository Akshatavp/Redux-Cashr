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
        backgroundColor: "green",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "20px",
      }}
    >
      {currentTime.toLocaleTimeString()}
    </div>
  );
};

export default Timer;
