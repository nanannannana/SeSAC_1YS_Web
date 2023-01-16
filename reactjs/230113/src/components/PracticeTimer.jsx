import React, { useRef, useEffect, useState } from 'react';

export default function PracticeTimer() {
  const [text, setText] = useState(false);
  const time = useRef(0);
  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <h1>{time.current}</h1>
      <button onClick={() => setText(!text)}>시간</button>
    </div>
  );
}
