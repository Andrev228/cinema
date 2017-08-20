import { createStore, applyMiddleware } from 'redux';
import reducer                          from './reducers/index.jsx';
import thunk                        	from 'redux-thunk';

let initialState = {
    login: '',
    comments: [],
};

const store = createStore(reducer,
    initialState,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;