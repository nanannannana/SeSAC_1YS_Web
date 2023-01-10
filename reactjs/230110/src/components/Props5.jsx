import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Props5 extends Component {
  static defaultProps = {
    text: 'App 컴포넌트에서 넘겨준 text props입니다.',
  };
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={() => console.log(`${valid}`)}>콘솔 메세지</button>
      </div>
    );
  }
}
