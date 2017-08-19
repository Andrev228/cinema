import * as types from '../constants/constants.jsx';

const reducer = (state, action) => {

    switch (action.type) {

        case types.SET_STORE:
            let newStore = Object.assign({}, state);
            newStore.films = JSON.parse(JSON.stringify(action.films));
            return newStore;

        case types.CHANGE_DATE:
            localStorage.setItem('date', action.date);
            return Object.assign({}, state, {
                date: action.date
            });
        case types.CHANGE_GENRE:
            localStorage.setItem('genre', action.genre);
            return Object.assign({}, state, {
                genre: action.genre
            });
        case types.CHANGE_FORMAT:
            localStorage.setItem('format', action.filmType);
            return Object.assign({}, state, {
                format: action.filmType
            });
        case types.CHANGE_MIN_TIME:
            localStorage.setItem('minTime', action.time);
            return Object.assign({}, state, {
                minTime: action.time
            });
        case types.CHANGE_MAX_TIME:
            localStorage.setItem('maxTime', action.time);
            return Object.assign({}, state, {
                maxTime: action.time
            });
        default:
            return state;
    }
};

export default reducer;