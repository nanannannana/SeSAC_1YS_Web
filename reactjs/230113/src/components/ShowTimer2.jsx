import React, { useState } from 'react';
import Timer2 from './Timer2';

export default function ShowTimer2() {
  const [show, setShow] = useState(false);
  const Conditional = show && <Timer2 />;
  const showTimer = () => {
    setShow(!show);
  };
  return (
    <div>
      {Conditional}
      <button onClick={showTimer}>
        {show ? 'Timer 숨기기' : 'Timer 펼치기'}
      </button>
    </div>
  );
}
