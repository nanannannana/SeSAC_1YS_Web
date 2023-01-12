import React from 'react';
import { useState, useRef } from 'react';

export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(false);

  const countUpState = () => {
    setCountState(countState + 1);
    console.log('state: ', countState);
  };
  const countUpRef = () => {
    countRef.current += 1;
    console.log('ref: ', countRef.current);
  };
  const countUpVar = () => {
    countVar += 1;
    console.log('var: ', countVar);
  };
  const reRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Var: {countVar}</h1>
      <br />
      <button onClick={countUpState}>stateUp</button>
      <button onClick={countUpRef}>refUp</button>
      <button onClick={countUpVar}>varUp</button>
      <br />
      <button onClick={reRender}>렌더링!</button>
    </div>
  );
}
