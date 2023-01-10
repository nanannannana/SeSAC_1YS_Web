import React from 'react';
import img from '../logo.svg';
import '../App.css';

export default function Prop4({ title, writer, sale, sort }) {
  return (
    <div className="style">
      <h1 className="style2">이번주 베스트셀러</h1>
      <img src={img} className="style2"></img>
      <h2>{title}</h2>
      <h4>저자: {writer}</h4>
      <h4>판매가: {sale}</h4>
      <h4>구분: {sort}</h4>
    </div>
  );
}
