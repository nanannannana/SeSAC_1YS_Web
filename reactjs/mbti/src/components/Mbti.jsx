import React from 'react';
import styled from 'styled-components';
import SkyButton from './SkyButton';
import { useDispatch, useSelector } from 'react-redux';
import { check, next } from '../store/modules/mbti';
import ProgressBar from './ProgressBar';

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
      <ul>
        {survey[page - 1].answer.map((v, i) => {
          return (
            <li key={i}>
              <SkyButton
                text={v.text}
                clickEvent={() => {
                  dispatch(check(v.result));
                  dispatch(next());
                }}
              />
              {i === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <ProgressBar page={page} maxPage={survey.length} />
    </>
  );
}
