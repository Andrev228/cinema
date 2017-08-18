import * as types from '../constants/constants.jsx';
import { urlTimetable }    from '../../../config/url.jsx';
import fetch      from 'isomorphic-fetch';

export const getInitStore = () => {
    return dispatch => {
        fetch(urlTimetable, {
            method: 'get'
        })
            .then(res => {
                res.json()
                    .then(store => {
                        dispatch({
                            type: types.SET_STORE,
                            store
                        })
                    })
            })
    }
};

export const dateClick = (date) => ({
    type: types.CHANGE_DATE,
    date
});

export const filmTypeClick = (filmType) => ({
    type: types.CHANGE_TYPE,
    filmType
});

export const genreClick = (genre) => ({
    type: types.CHANGE_GENRE,
    genre
});

export const setMinTime = (time) => ({
        type: types.CHANGE_MIN_TIME,
        time
    });

export const setMaxTime = (time) => ({
    type: types.CHANGE_MAX_TIME,
    time
});