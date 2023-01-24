import React from 'react';
import styled from 'styled-components';
import SkyBlueButton from './SkyBlueButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { check, next } from '../store/modules/mbti';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2em;
  padding-top: 1em;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <u1>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyBlueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result));
                  dispatch(next());
                }}
              />
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </u1>
    </>
  );
}
