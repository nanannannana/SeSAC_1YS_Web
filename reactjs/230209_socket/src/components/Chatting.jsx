import React, { useEffect, useRef, useState } from 'react';
import './Chatting.css';
import styled from 'styled-components';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const { Select, Control } = Form;

const InputGroupCss = styled(InputGroup)`
  width: 300px;
`;
const SelectCss = styled(Select)`
  width: 1px !important;
  padding: 0 0 0 5px !important;
`;

export default function Chatting({ socket }) {
  const username = useSelector((state) => state.chat.name);
  const [socketId, setSocketId] = useState('');
  const [chatting, setChatting] = useState([]);
  // 서버에서 받은 값을 담는 state
  const [recentChat, setRecentChat] = useState('');
  const inputValue = useRef(null);

  useEffect(() => {
    socket.emit('username', username);
    socket.on('socketID', (id) => setSocketId(id));
    socket.on('notice', (data) => setRecentChat({ ...data, tag: 'notice' }));

    return () => {
      socket.off('username');
      socket.off('notice');
    };
  }, [socket]);

  useEffect(() => {
    socket.on('newMsg', (data) => {
      data.from === socketId
        ? setRecentChat({ ...data, tag: 'me' })
        : setRecentChat({ ...data, tag: 'others' });
    });
  }, [socketId]);

  useEffect(() => {
    Object.keys(recentChat).length > 0 &&
      setChatting([...chatting, recentChat]);
    setRecentChat('');
    console.log('chatting', chatting);
  }, [recentChat]);

  const onClick = () => {
    socket.emit('sendMsg', { msg: inputValue.current.value });
    inputValue.current.value = '';
  };

  return (
    <>
      <div className="chat">
        {chatting.map((v, i) =>
          v.tag === 'notice' ? (
            <div key={i} className={v.tag}>
              {v.username}
              {v.msg}
            </div>
          ) : v.tag === 'me' ? (
            <div key={i} className={v.tag}>
              {v.msg}
            </div>
          ) : (
            <div key={i} className="others_box">
              <div className={v.tag}>
                {v.username}: {v.msg}
              </div>
            </div>
          )
        )}
        {/* <div className="notice">000님이 입장하였습니다.</div>
        <div className="me">안녕</div>
        <div className="others_box">
          <div className="others">반가워</div>
        </div> */}
      </div>
      <InputGroupCss>
        <SelectCss size="sm" className="rounded-0">
          <option>전체</option>
          <option>홍길동</option>
        </SelectCss>
        <Control ref={inputValue} placeholder="메세지를 입력하세요." />
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={onClick}
        >
          전송
        </Button>
      </InputGroupCss>
    </>
  );
}
