import React from 'react';

export default function ListChild({ item, price }) {
  return (
    <div>
      <h2>품목명: {item}</h2>
      <p>가격: {price}</p>
      <hr />
    </div>
  );
}
