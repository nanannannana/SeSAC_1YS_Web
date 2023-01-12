import React, { useState, useRef } from 'react';

export default function UseRef() {
  const [text, setText] = useState('안녕하세요');
  const inputValue = useRef('');
  function onChangeText() {
    console.log(inputValue);
    setText(inputValue.current.value);
  }
  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue}
        onChange={(e) => {
          onChangeText(e);
        }}
      />
    </div>
  );
}
