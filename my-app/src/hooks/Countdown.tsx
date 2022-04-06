import React, { useEffect, useRef, useState } from 'react';

function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c - 1 === 0) {
          clearInterval(interval);
        }
        return c - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="Countdown">{count}</div>;
}

export default Countdown;
