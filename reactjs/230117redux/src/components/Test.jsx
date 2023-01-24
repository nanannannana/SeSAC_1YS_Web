import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>당신의 몸무게는 {weight}kg입니다.</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        kg 증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        kg 감소
      </button>
    </div>
  );
}
