import logo from '../logo.svg';
import styled, { keyframes } from 'styled-components';

const MyDiv = styled.div`
  text-align: center;
`;
const MyHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const App_logo_spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const MyLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${App_logo_spin} infinite 20s linear;
`;

const MyLink = styled.a`
  color: #61dafb;
`;

function StyledApp() {
  return (
    <MyDiv>
      <MyHeader>
        <MyLogo src={logo} alt="logo"></MyLogo>
        <p>
          Edit<code>src/App.js</code> and save to reload.
        </p>
        <MyLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyLink>
      </MyHeader>
    </MyDiv>
  );
}

export default StyledApp;
