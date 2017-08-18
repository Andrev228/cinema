import { createStore, applyMiddleware } from 'redux';
import reducer                          from './reducers/index';
import thunkMiddleware                  from 'redux-thunk';

let initialState = {
    films: [{
        id: 0,
        title: '',
        image: '',
        genre: [],
        timetable: {
            '01.01.2017': [],
        }
    }],
    date: '01.01.2017',
    format: 'Все',
    minTime: 540,
    maxTime: 1440,
    genre: 'Все жанры'
};

const store = createStore(reducer,
    initialState,
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
