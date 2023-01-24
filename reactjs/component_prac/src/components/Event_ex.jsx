import React, { useRef, useState } from 'react';

export default function Event_ex({ arr }) {
  const [state, setState] = useState(arr);
  const inputValue = useRef({ name: '', email: '' });
  const onClick = () => {
    setState([
      ...state,
      {
        name: inputValue.current.name.value,
        email: inputValue.current.email.value,
      },
    ]);
    inputValue.current.name.value = '';
    inputValue.current.email.value = '';
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };
  const remove = (e) => {
    setState(state.filter((v) => v.name !== e));
  };

  return (
    <>
      <input ref={(v) => (inputValue.current.name = v)} placeholder="이름" />
      <input
        ref={(v) => (inputValue.current.email = v)}
        onKeyPress={onKeyPress}
        placeholder="이메일"
      />
      <button onClick={onClick}>등록</button>
      {state.map((v, i) => (
        <h3 key={i} onDoubleClick={() => remove(v.name)}>
          {v.name}: {v.email}
        </h3>
      ))}
    </>
  );
}
