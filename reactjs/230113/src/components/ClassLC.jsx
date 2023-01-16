import React, { Component } from 'react';

export default class ClassLC extends Component {
  componentWillMount() {
    alert('render전 가장 먼저 호출!');
  }
  componentDidMount() {
    alert('ComponentDidMount 호출!');
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.name !== nextProps.name;
  }
  render() {
    alert('render 호출!');
    return <h2>hello, {this.props.name}</h2>;
  }
}
