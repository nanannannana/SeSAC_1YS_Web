import { combineReducers } from 'redux';
import todo from './modules/todo';
import mbti from './modules/mbti';

// 리덕스 통합 관리
export default combineReducers({
  todo,
  mbti,
});
