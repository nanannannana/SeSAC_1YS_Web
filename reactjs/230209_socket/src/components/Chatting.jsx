import React from 'react';
import styled from 'styled-components';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const { Select, Control } = Form;

const Chat = styled.div`
  width: 300px;
  height: 500px;
  background-color: #f4f4f4;
`;
const Notice = styled.div`
  text-align: center;
  padding-top: 10px;
  font-size: 12px;
  clear: both;
`;
const Me = styled.div`
  float: right;
  clear: both;
  background-color: ${(props) => props.background_color};
  padding: 5px 10px;
  margin: 10px 10px 0 0;
  text-align: center;
  border-radius: 5%;
`;
const Others = styled.div`
  display: inline-block;
  background-color: ${(props) => props.background_color};
  padding: 5px 10px;
  text-align: center;
  border-radius: 5%;
`;
const OthersBox = styled.div`
  clear: both;
  padding: 10px 0 0 10px;
`;
const InputGroupCss = styled(InputGroup)`
  width: 300px;
`;
const SelectCss = styled(Select)`
  width: 1px !important;
  padding: 0 0 0 5px !important;
`;

export default function Chatting({ socket }) {
  const username = useSelector((state) => state.chat.name);
  console.log('username: ', username);
  socket.emit('username', username);

  return (
    <>
      <Chat>
        <Me background_color="rgb(255, 119, 119)">안녕</Me>
        <OthersBox>
          <Others background_color="#dcdcdc">반가워</Others>
        </OthersBox>
      </Chat>
      <InputGroupCss>
        <SelectCss size="sm" className="rounded-0">
          <option>전체</option>
          <option>홍길동</option>
        </SelectCss>
        <Control placeholder="메세지를 입력하세요." />
        <Button variant="outline-secondary" className="rounded-0">
          전송
        </Button>
      </InputGroupCss>
    </>
  );
}
