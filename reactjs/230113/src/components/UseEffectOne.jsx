import React, { useState, useEffect, useRef } from 'react';

export default function UseEffectOne() {
  const [count, SetCount] = useState(0);
  const [text, setText] = useState('텍스트를 입력하세요.');
  const inputValue = useRef('');
  const onButtonOnClick = () => {
    console.log('버튼 클릭!');
    SetCount(count + 1);
  };
  const onInputChange = () => {
    console.log('input값 입력!');
    setText(inputValue.current.value);
  };
  useEffect(() => {
    console.log('useEffect 실행중!');
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonOnClick}>+1 버튼</button>
      <br />
      <hr />
      <input ref={inputValue} onChange={onInputChange}></input>
      <h2>{text}</h2>
    </>
  );
}
