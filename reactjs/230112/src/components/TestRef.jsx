import React, { useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');
  function onChangeText(e) {
    const inputText = e.target.value;
    setText(inputText);
  }

  return (
    <div>
      <h1>{text}</h1>
      <input
        onChange={(e) => {
          onChangeText(e);
        }}
      />
    </div>
  );
}
