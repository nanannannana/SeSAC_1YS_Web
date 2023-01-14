import React, { useState } from 'react';

export default function FuncEvent3_2() {
  const [value, setValue] = useState({
    username: '',
    message: '',
  });
  const { username, message } = value;
  const onChange = (e) => {
    const nextValue = {
      ...value,
      [e.target.name]: e.target.value,
    };
    // ...value => 기존의 value 내용을 복사
    // [e.target.name]: e.target.value => [e.target.name] key의 value값을 e.target.value로 변경
    setValue(nextValue);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setValue({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };
  return (
    <div>
      <h1>함수형 리액트, state 값 객체인 이벤트</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={username}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="이곳에 입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={onClick}>클릭</button>
    </div>
  );
}
