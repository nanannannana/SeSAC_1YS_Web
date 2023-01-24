// 초기 state 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '코테 공부하기',
      done: false,
    },
    {
      id: 2,
      text: '운동하기',
      done: false,
    },
  ],
};

// action type 설정
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';
const DELETE = 'todo/DELETE';

// action 생성 함수
export const create = (payload) => ({ type: CREATE, payload });
export const done = (id) => ({ type: DONE, id });
export const del = (id) => ({ type: DELETE, id });

// reducer 생성
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((v, i) =>
          i === action.id ? { ...v, done: true } : v
        ),
      };
    case DELETE:
      return {
        ...state,
        list: state.list.filter((v) => v.id !== action.id),
      };
    default:
      return state;
  }
}
