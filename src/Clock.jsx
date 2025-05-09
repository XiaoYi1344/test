import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const getTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  const [state, setState] = useState({
    time: {
      created: new Date().toLocaleTimeString(),
    },
    seconds: {
      created: new Date().getSeconds(),
    },
  });

  const getTimeS = () => {
    const now = new Date();
    setState({
      time: { created: now.toLocaleTimeString() },
      seconds: { created: now.getSeconds() },
    });
  };

  // Cập nhật mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Ghi log mỗi khi time thay đổi
  useEffect(() => {
    console.log('Time changed:', time);
  }, [time]);

  return (
    <div>
      <h1>Yo, world!</h1>
      <h2>Now is {time}.</h2>
      <h2>Now is {new Date().toLocaleString()}</h2>
      
      <button onClick={getTime}>Get Time</button>

      <h2>Time: {state.time.created}.</h2>
      <h3>Seconds: {state.seconds.created}</h3>
      <button onClick={getTimeS}>Get Time State</button>
    </div>
  );
}

export default Clock;
