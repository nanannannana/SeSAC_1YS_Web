import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function TodoList() {
  const inputRef = useRef();
  // useSelector를 통해 combineReducer에서 합쳐놓은 state값 중 todo값을 가져옴
  // todo 값에서 list 값을 가져옴
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === false
  );
  const nextID = useSelector((state) => state.todo.nextID);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(create({ id: nextID, text: inputRef.current.value }));
            inputRef.current.value = '';
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {list.map((v) => (
          <li key={v.id}>
            {v.text}{' '}
            <button
              onClick={() => {
                dispatch(done(v.id));
              }}
            >
              완료
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
