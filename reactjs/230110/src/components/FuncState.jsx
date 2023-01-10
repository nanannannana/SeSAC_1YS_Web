import React, { useState } from 'react';

export default function FuncState() {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');
  const onClickEnter = () => setMessage('안녕하세용');
  const onClickLeave = () => setMessage('안녕히가세요!');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>
      <button onClick={() => setColor('green')}>초록색</button>
    </div>
  );
}
