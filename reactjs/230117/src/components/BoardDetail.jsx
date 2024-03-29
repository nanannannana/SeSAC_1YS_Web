import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function BoardDetail() {
  const { boardID } = useParams();

  return (
    <>
      <Header />
      <h2>{boardID}</h2>
    </>
  );
}
