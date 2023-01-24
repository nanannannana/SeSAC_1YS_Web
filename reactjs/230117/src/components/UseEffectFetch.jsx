import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  // 서버에서 받은 데이터 받을 state
  const [dataArr, setDataArr] = useState([]);
  async function fetchData() {
    const resFetch = await axios.get('http://localhost:4000/');
    // 통신이 제대로 되지 않았을 경우, '통신에러' alert 창 뜸
    if (resFetch.status !== 200) return alert('통신 에러');
    // data 객체 만든 뒤, state 값으로 설정하는 이유? 배열은 메모리 주소가 변화해야 state 변화 감지되기 때문
    const data = resFetch.data;
    setDataArr(data);
    console.log(data);
  }

  // useEffect메서드는 return을 그린 뒤 실행
  // 따라서, state 초기값을 빈 배열로 설정한 경우, map은 undefined값에 관해 오류를 띄우기 때문에 에러 발생함.
  // state 초기값 반드시 설정! ex) 빈 배열
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {dataArr.map((v, i) => (
        <ProfileComponent
          key={i}
          name={v.name}
          age={v.age}
          nickName={v.nickName}
        />
      ))}
    </div>
  );
}
