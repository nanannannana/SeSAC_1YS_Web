import React, { useEffect, useState } from 'react';

export default function Timer2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const goConsole = () => {
    console.log(count);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={goConsole}>콘솔찍기</button>
    </>
  );
}
