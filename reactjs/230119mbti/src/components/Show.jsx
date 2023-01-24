import React from 'react';
import OrangeButton from './OrangeButton';
import styled from 'styled-components';

const Header = styled.p`
  font-size: 3em;
`;
const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;
const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Show() {
  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explaination>결과 설명 출력</Explaination>
      <Result>결과 출력</Result>
      <Additional>이건 재미로 읽어 보세요!</Additional>
      <AdditionalImg alt="팩폭" />
      <OrangeButton text="다시 검사하기" />
    </>
  );
}
