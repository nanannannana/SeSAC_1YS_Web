import React, { Component } from 'react';

export default class Event extends Component {
  state = {
    message: '',
  };

  render() {
    return (
      <div>
        <h1>리액트의 이벤트</h1>
        <input
          type="text"
          name="message"
          placeholder="이곳에 입력해보세요"
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        ></input>
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}
