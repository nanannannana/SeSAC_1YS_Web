import { IDiary } from "../global/global";

interface Action {
  type: string;
  id: number;
  payload: {
    id: number;
    date: string;
    title: string;
    content: string;
  };
}

const diaryReducer = (state: IDiary[] = [], action: Action) => {
  if (action.type === "DIARY/WRITE") {
    state = [...state, action.payload];
  } else if (action.type === "DIARY/DELETE") {
    state = state.filter((diary) => diary.id != action.id);
  }

  return state;
};
export default diaryReducer;
