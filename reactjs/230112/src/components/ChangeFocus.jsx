import React, { useState, useRef } from 'react';

export default function ChangeFocus() {
  const input1 = useRef();
  const input2 = useRef();

  const changeFocusOne = () => {
    input1.current.focus();
  };
  const changeFocusTwo = () => {
    input2.current.focus();
  };

  return (
    <div>
      <input ref={input1}></input>
      <input ref={input2}></input>
      <br />
      <button onClick={changeFocusOne}>1번</button>
      <button onClick={changeFocusTwo}>2번</button>
    </div>
  );
}
