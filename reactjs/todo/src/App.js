import DoneList from './components/DoneList';
import Todolist from './components/Todolist';
import styled from 'styled-components';

const Mydiv = styled.div`
  margin-left: 10px;
`;

function App() {
  return (
    <Mydiv>
      <Todolist />
      <DoneList />
    </Mydiv>
  );
}

export default App;
