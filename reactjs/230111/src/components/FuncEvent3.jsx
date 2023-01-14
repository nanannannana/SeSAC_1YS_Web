import React, { useState } from 'react';

export default function FuncEvent3() {
  // state 값 따로 지정
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const eventClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };
  const eventKeyPress = (e) => {
    if (e.key === 'Enter') eventClick();
  };
  return (
    <div>
      <h1>함수형 리액트의 이벤트</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={username}
        onChange={onChangeUsername}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="이곳에 입력하세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={eventKeyPress}
      />
      <br />
      <button onClick={eventClick}>클릭</button>
    </div>
  );
}
