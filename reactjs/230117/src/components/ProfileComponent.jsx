import React from 'react';

export default function ProfileComponent({ name, age, nickName }) {
  return (
    <div>
      <h1>이름: {name}</h1>
      <h1>나이: {age}</h1>
      <h1>닉네임: {nickName}</h1>
      <hr />
    </div>
  );
}
