import { createStore,
    applyMiddleware }  from 'redux';
import reducer         from './reducers/index.jsx';
import thunkMiddleware from 'redux-thunk';

let initialState = {
    errors: [],
    login: ''
};

const store = createStore(reducer,
    initialState,
    applyMiddleware(thunkMiddleware));

export default store;