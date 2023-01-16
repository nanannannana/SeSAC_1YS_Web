import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ExConditional() {
  const [text, setText] = useState('1번');
  let Conditional =
    text === '1번' ? (
      <PracticeOne text="1번 컴포넌트" />
    ) : (
      <PracticeTwo text="2번 컴포넌트" />
    );
  const onClick = () => {
    text === '1번' ? setText('2번') : setText('1번');
  };
  return (
    <div>
      {Conditional}
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
