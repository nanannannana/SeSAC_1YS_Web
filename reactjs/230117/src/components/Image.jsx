import React from 'react';
import dogImg from '../진돗개.jpg';

export default function Image() {
  return (
    <>
      <img src="/images/진돗개.jpg" alt="강아지" />
      <hr />
      <img src={dogImg} alt="강아지" />
    </>
  );
}
