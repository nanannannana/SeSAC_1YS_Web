import React from 'react';

export default function Props3({ fruit }) {
  return (
    <div>
      좋아하는 과일은 <span style={{ color: 'red' }}>{fruit}</span>입니다
    </div>
  );
}

Props3.defaultProps = {
  fruit: '귤(기본값)',
};
