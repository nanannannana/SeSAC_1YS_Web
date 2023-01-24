import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { del } from '../store/modules/todo';

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  return (
    <>
      <h1>DoneList</h1>
      <ul>
        {list.map((v) => (
          <React.Fragment key={v.id}>
            {v.done && (
              <li style={{ margin: '15px 0 15px 0' }}>
                {v.text}{' '}
                <button onClick={() => dispatch(del(v.id))}>삭제</button>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
