import React, { useRef, useState } from 'react';

export default function UseRefPrac2() {
  const [num1, setNum1] = useState(Math.round(Math.random() * 9));
  // const num1 = Math.floor(Math.random() * 10) 도 가능
  const [num2, setNum2] = useState(Math.round(Math.random() * 9));
  const [again, setAgain] = useState(false);
  const answer = useRef('');
  const arr = ['*', '-', '+'];
  const arrRandom = Math.floor(Math.random() * arr.length);

  // 연산자 if문
  // let ans = 0;
  // if (arrRandom === 0) ans = num1 * num2
  // else if(arrRandom === 1) ans = num1 - num2
  // else ans = num1 + num2;

  const answerCheck = () => {
    // eval(num1 + arr[arrRandom] + num2) === parseInt(answer.current.value)
    //   ? (alert('정답입니다!'), setAgain(!again))
    //   : (alert('틀렸습니다'), setAgain(!again));

    if (eval(num1 + arr[arrRandom] + num2) === parseInt(answer.current.value)) {
      alert('정답입니다!');
      answer.current.value = '';
      answer.current.focus();
      setAgain(!again);
      //   setNum1(Math.round(Math.random() * 9));
      //   setNum2(Math.round(Math.random() * 9));
    } else {
      alert('틀렸습니다!');
      answer.current.value = '';
      answer.current.focus();
    }
  };
  return (
    <div>
      <h1>
        {num1} {arr[arrRandom]} {num2}
      </h1>
      <input ref={answer} />
      <button onClick={answerCheck}>정답</button>
    </div>
  );
}
