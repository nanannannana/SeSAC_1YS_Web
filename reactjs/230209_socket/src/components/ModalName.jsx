import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { name } from '../store/module/chat';

export default function ModalName({ socket }) {
  const dispatch = useDispatch();
  //   const username = useSelector((state) => state.chat.name);

  useEffect(() => {
    dispatch(name(prompt('닉네임을 입력하세요')));
  }, []);

  // 사용자가 닉네임 입력 시, 서버 소켓으로 닉네임 전달
  //   if (username !== '' && username !== null) socket.emit('username', username);

  return <h1>Hello</h1>;
}
