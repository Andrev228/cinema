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
    date: localStorage.getItem('date') || '01.01.2017',
    format: localStorage.getItem('format') || 'Все',
    minTime: localStorage.getItem('minTime') || 540,
    maxTime: localStorage.getItem('maxTime') || 1440,
    genre: localStorage.getItem('genre') || 'Все жанры'
};

const store = createStore(reducer,
    initialState,
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
