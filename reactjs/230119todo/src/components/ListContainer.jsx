import React from 'react';
import TodoList from './TodoList';
import DoneList from './DoneList';

export default function ListContainer() {
  return (
    <>
      <TodoList />
      <DoneList />
    </>
  );
}
