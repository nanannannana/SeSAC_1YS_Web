import React from 'react';
import { useSelector } from 'react-redux';

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );
  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {list.map((v) => (
          <li key={v.id}>{v.text}</li>
        ))}
      </ul>
    </section>
  );
}
