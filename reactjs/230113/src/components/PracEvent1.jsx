import React, { Component } from 'react';

export default class PracEvent1 extends Component {
  state = {
    text: 'Hello World!',
  };
  onClick = () => {
    this.setState({
      text: 'Goodbye World!',
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}
