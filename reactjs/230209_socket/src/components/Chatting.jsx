import React, { useEffect, useRef, useState } from 'react';
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
  background-color: ${(props) => props.bk_color};
  padding: 5px 10px;
  margin: 10px 10px 0 0;
  text-align: center;
  border-radius: 5%;
`;
const OthersBox = styled.div`
  clear: both;
  padding: 10px 0 0 10px;
`;
const Others = styled.div`
  display: inline-block;
  background-color: ${(props) => props.bk_color};
  padding: 5px 10px;
  text-align: center;
  border-radius: 5%;
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
  const [socketId, setSocketId] = useState('');
  // 화면에 그려지는 chat 대화 내용
  const [chatting, setChatting] = useState([]);
  // 서버에서 받은 값을 담는 state
  const [recentChat, setRecentChat] = useState('');
  const [users, setUsers] = useState({ all: '전체' });
  const inputValue = useRef(null);
  const SelectValue = useRef(null);
  const [to, setTo] = useState('전체');

  useEffect(() => {
    socket.emit('username', username);
    socket.on('socketID', (id) => setSocketId(id));
    socket.on('notice', (data) => setRecentChat({ ...data, tag: 'notice' }));
    socket.on('users', (user) => setUsers(Object.assign(user, users)));
    return () => {
      socket.off('username');
      socket.off('notice');
    };
  }, [socket]);

  useEffect(() => {
    socket.on('newMsg', (data) => {
      data.from === socketId
        ? data.isDm
          ? setRecentChat({ ...data, tag: 'me', bkColor: 'rgb(254, 210, 210)' })
          : setRecentChat({ ...data, tag: 'me', bkColor: 'rgb(255, 119, 119)' })
        : data.isDm
        ? setRecentChat({
            ...data,
            tag: 'others',
            bkColor: 'rgb(254, 210, 210)',
          })
        : setRecentChat({ ...data, tag: 'others', bkColor: '#dcdcdc' });
    });
  }, [socketId]);

  useEffect(() => {
    Object.keys(recentChat).length > 0 &&
      setChatting([...chatting, recentChat]);
    setRecentChat('');
    console.log('chatting', chatting);
  }, [recentChat]);

  const onClick = () => {
    socket.emit('sendMsg', { msg: inputValue.current.value, to: to });
    inputValue.current.value = '';
  };

  const SelectOnChange = (e) => setTo(e.target.value);

  return (
    <>
      <Chat>
        {chatting.map((v, i) =>
          v.tag === 'notice' ? (
            <Notice key={i}>
              {v.username}
              {v.msg}
            </Notice>
          ) : v.tag === 'me' ? (
            <Me key={i} bk_color={v.bkColor}>
              {v.msg}
            </Me>
          ) : (
            <OthersBox key={i}>
              <Others bk_color={v.bkColor}>
                {v.username}: {v.msg}
              </Others>
            </OthersBox>
          )
        )}
        {/* <div className="notice">000님이 입장하였습니다.</div>
        <div className="me">안녕</div>
        <div className="others_box">
          <div className="others">반가워</div>
        </div> */}
      </Chat>
      <InputGroupCss>
        <SelectCss
          ref={SelectValue}
          onChange={SelectOnChange}
          size="sm"
          className="rounded-0"
        >
          {Object.values(users)
            .reverse()
            .map((v, i) => (
              <option key={i}>{v}</option>
            ))}
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
