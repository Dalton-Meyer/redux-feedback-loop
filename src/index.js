import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const infoReducer = (state = [], action) => {
    let newState = [...state]
    if (action.type === 'ADD_INFO') {
        newState = [...state, action.payload]
    }
    else if (action.type === 'RESTART_INFO') {
        newState = [];
    }
    return newState;
}

const storeInstance = createStore(
    combineReducers({
        infoReducer: infoReducer
    }),
    // redux devtools (browser extension): could also do redux logger here
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'))
registerServiceWorker();
