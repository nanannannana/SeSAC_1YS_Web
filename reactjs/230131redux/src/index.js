import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    // var newState = Object.assign(state);
    // newState.push(action.payload);
    // return newState
    default:
      return state;
  }
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
