import React from 'react';
import Button from './Button';

export default function OrangeButton({ text, ClickEvent }) {
  return (
    <Button
      text={text}
      cilckEvent={ClickEvent}
      mainColor="#fae243"
      subColor="#fa9f1a"
      hoverColor="#faf000"
    />
  );
}
