import React from 'react';
import PropTypes from 'prop-types';

export default function Props2({ name, favoriteNumber, children }) {
  return (
    <div>
      이름: {name} <br />
      children 값: {children} <br />
      좋아하는 숫자: {favoriteNumber}
    </div>
  );
}
Props2.defaultProps = {
  name: '기본 이름',
};
Props2.propTypes = {
  name: PropTypes.string, // name 값 type은 string
  favoriteNumber: PropTypes.number.isRequired, // favoriteNumber 값은 필수 props
};
