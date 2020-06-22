import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const infoReducer = (state = { feeling: 0,support: 0,understanding: 0,comment: ''} , action) => {
    let newState = state
    if (action.type === 'ADD_FEELING') {
        newState.feeling = Number(action.payload)
    }
    else if (action.type === 'ADD_SUPPORT') {
        newState.support = Number(action.payload)
    }
    else if (action.type === 'ADD_UNDERSTANDING'){
        newState.understanding = Number(action.payload)
    }
    else if (action.type === 'ADD_COMMENT'){
        newState.comment = action.payload
    }
    else if (action.type === 'RESTART_INFO') {
        newState = state;
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
