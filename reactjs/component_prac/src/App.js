/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Event_ex from './components/Event_ex';

function App() {
  const arr = [
    {
      name: '김스타',
      email: 'kimstar@star.com',
    },
    {
      name: '이헬로',
      email: 'leehello@hello.com',
    },
  ];
  return (
    <div className="App">
      <Event_ex arr={arr} />
    </div>
  );
}

export default App;
