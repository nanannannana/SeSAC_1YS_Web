const initState = {
  name: '',
};
const NAME = 'chat/NAME';
export const name = (name) => ({ type: NAME, payload: name });
export default function chat(state = initState, action) {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
