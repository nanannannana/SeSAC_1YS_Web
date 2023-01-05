import React, { useState } from 'react';

export default function ArrState() {
  const [state, setState] = useState([0]); //0번째의 값이 0
  console.log(state);
  return (
    <div>
      {state[0]}
      <br />
      <button
        onClick={() => {
          //   state[0] = 1; // 주솟값 변경X -> component 리렌더링X
          //   setState(state);
          //   setState([1]); // 메모리 주소 변경
          state[0] = 1;
          const copyArr = [...state]; // 주솟값이 아닌 실제 값만 copy
          setState(copyArr); // copy한 값으로 변경
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}
