// 초기 상태 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

// 액션 타입 정의 하기
const CREATE = 'todo/CREATE'; // todo.js에서 사용하는 CREATE type
const DONE = 'todo/DONE';

// 액션 생성 함수 작성
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

let counts = initState.list.length;
initState['nextID'] = counts;

// 리듀서
export default function todo(state = initState, action) {
  // type이 CRATE일 때, list 추가
  // type이 DONE일 때, list의 done을 true로 변환
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((v) => {
          if (v.id === action.id) {
            return {
              ...v,
              done: true,
            };
          } else {
            return v;
          }
        }),
      };
    default:
      return state;
  }
}
