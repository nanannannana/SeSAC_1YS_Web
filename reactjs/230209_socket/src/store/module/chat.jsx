const initState = {
  name: '',
  id: '',
};
const NAME = 'chat/NAME';
const ID = 'chat/ID';

export const name = (name) => ({ type: NAME, payload: name });
export const id = (id) => ({ type: ID, payload: id });

export default function chat(state = initState, action) {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
}
