import React from 'react';
import Ex1 from './Ex1';

export default function CallEx1() {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  return (
    <div className="App">
      <Ex1 objArr={pororoObjArr} />
    </div>
  );
}
