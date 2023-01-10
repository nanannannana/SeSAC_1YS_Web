import React, { Component } from 'react';

export default class State1 extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState((prevState) => ({ number: prevState.number + 2 }));
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => ({ number: prevState.number - 1 }));
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
