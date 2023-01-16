import React, { useState } from 'react';
import Timer from './Timer';

export default function Unmount() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>버튼</button>
    </div>
  );
}
