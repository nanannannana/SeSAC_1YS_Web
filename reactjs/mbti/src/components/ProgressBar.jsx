import React from 'react';
import styled from 'styled-components';

const MyProgress = styled.div`
  margin-top: 3em;
`;
const Fill = styled.div`
  width: 100%;
  height: 10px;
  background-color: #777;
  margin-top: 1em;
  text-align: left;
`;
const Gauge = styled.div`
  background-color: skyblue;
  display: inline-block;
  height: inherit;
  position: relative;
  top: -4px;
  width: ${(props) => props.percent}%;
`;

export default function ProgressBar({ page, maxPage }) {
  return (
    <MyProgress>
      <div>
        {page} / {maxPage}
      </div>
      <Fill>
        <Gauge precent={(page / maxPage) * 100} />
      </Fill>
    </MyProgress>
  );
}
