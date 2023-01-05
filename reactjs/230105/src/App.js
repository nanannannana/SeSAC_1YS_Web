import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Ex1 from './components/Ex1';
import Condition from './components/Condition';
import Ex2 from './components/Ex2';
import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';
import ArrState from './components/ArrState';
import ObjState from './components/ObjState';

function App() {
  // state 선언
  let [teacher, setTeacher] = useState('뽀로로');
  function customSetTeacher() {
    setTeacher('pororo');
    console.log(teacher);
  }

  return (
    <div className="App">
      {/* <button onClick={customSetTeacher}>영어로!</button>
      <br />
      <span>{teacher}</span> */}

      <div>
        <ObjState />
      </div>
    </div>
  );
}

export default App;
