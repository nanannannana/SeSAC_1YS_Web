import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';

// configureStore = createStore 메서드(예전)
// reducer = rootReducer(= combine된 state들)
const store = configureStore({ reducer: rootReducer });
// 예전 방법: store 내 state 값 확인 -> 현재: chorme 도구, Redux DevTools 사용
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
