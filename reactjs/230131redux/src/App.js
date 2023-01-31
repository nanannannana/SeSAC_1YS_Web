import { useState } from 'react';
import Contact from './Contact';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';

export default function App() {
  const list = useSelector((state) => state).length;
  return (
    <>
      <p>현재 개수: {list}</p>
      <br />
      <Contact />
    </>
  );
}
