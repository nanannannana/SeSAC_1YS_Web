import io from 'socket.io-client';
import Chatting from './components/Chatting';
import ModalName from './components/ModalName';
import { useSelector } from 'react-redux';

// 소켓 연결
const socket = io.connect('http://localhost:4000');

function App() {
  const username = useSelector((state) => state.chat.name);
  const view =
    username !== '' && username !== null ? (
      <Chatting socket={socket} />
    ) : (
      <ModalName socket={socket} />
    );
  return <>{view}</>;
}

export default App;
