import logo from './logo.svg';
import './App.css';
import StyledApp from './components/StyledApp';
import Image from './components/Image';
import FancyBorder from './components/FancyBorder';
import Profile from './components/Profile';
import Board from './components/Board';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
