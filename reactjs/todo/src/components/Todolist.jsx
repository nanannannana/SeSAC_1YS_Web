import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function Todolist() {
  const inputText = useRef('');
  const list = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      create({
        id: list[list.length - 1].id + 1,
        text: inputText.current.value,
        done: false,
      })
    );
    inputText.current.value = '';
  };

  return (
    <>
      <h1>TodoList!</h1>
      <input ref={inputText} /> <button onClick={onClick}>입력</button>
      <br />
      <ul>
        {list.map((v) => (
          <React.Fragment key={v.id}>
            {!v.done && (
              <li style={{ margin: '15px 0 15px 0' }}>
                {v.text}{' '}
                <button onClick={() => dispatch(done(v.id))}>완료</button>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      <hr />
    </>
  );
}
