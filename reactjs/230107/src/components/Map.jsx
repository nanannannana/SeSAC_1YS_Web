import React from 'react';
import ListChild from './ListChild';

export default function Map() {
  const item = [
    {
      item: 'PS5',
      price: '685,000원',
    },
    {
      item: '에어 프라이어',
      price: '50,000원',
    },
    {
      item: '사세 치킨윙',
      price: '11,500원',
    },
  ];
  return (
    <div>
      {/* {item.map((el, index) => {
        return <ListChild item={el.item} price={el.price} key={index} />;
      })} */}
      {item.map((el, index) => {
        return (
          <div key={index}>
            <h2>품목명: {el.item}</h2>
            <p>가격: {el.price}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
