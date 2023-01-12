import React, { useRef } from 'react';

export default function UseRefPrac() {
  const color = useRef('white');
  const div1 = useRef('');
  const changeColor = () => {
    div1.current.style.backgroundColor = color.current.value;
  };
  return (
    <div ref={div1}>
      <input ref={color} />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
