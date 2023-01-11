import React, { Component } from 'react';

export default class Event2 extends Component {
  state = {
    message: '',
  };
  eventChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  eventClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };
  render() {
    return (
      <div>
        <h1>리액트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="값 입력"
          value={this.state.message}
          onChange={this.eventChange}
        ></input>
        <button onClick={this.eventClick}>클릭</button>
      </div>
    );
  }
}
