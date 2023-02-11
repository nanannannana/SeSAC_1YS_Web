import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { name } from '../store/module/chat';

export default function ModalName({ socket }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(name(prompt('닉네임을 입력하세요')));
  }, []);

  return <h1>Hello</h1>;
}
