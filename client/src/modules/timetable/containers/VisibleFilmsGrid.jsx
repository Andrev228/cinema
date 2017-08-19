import { connect }      from 'react-redux';
import FilmsGrid        from '../components/FilmsGrid.jsx';

const toTime = (time) => {
    let hours = (Math.floor(time/60)).toString();
    if (hours.length === 1) hours = '0' + hours;
    let minutes = (time % 60);
    if (minutes === 0) minutes = '0' + minutes.toString();
    return hours + ':' + minutes.toString();
};


const filterByDate = (state) => {
    let newState = JSON.parse(JSON.stringify(state));
    newState.films.map(el => {
        for (let key in el.timetable) {
            if (key === state.date) el.timetable = el.timetable[key]
        }
    });
    return newState;
};

const filterByGenre = (state) => {

    let newFilmsState = [];
    state.films.map(el => {
        el.genre.map(elm => {
            elm === state.genre ?
                newFilmsState.push(el) :
                 0;
        })
    });
    return Object.assign({}, state, {
        films: newFilmsState,
    });
};

const filterByFormat = (state) => {
    state.films = state.films.filter(el => {
        el.timetable = el.timetable.filter(elm => {
            return elm.format === state.format;
        });
        return !!el.timetable.length;
    });
    return state;
};

const filterByTime = (state) => {
    let helpArrFilms = JSON.parse(JSON.stringify(state.films)),
        counterToDelete,
        id = 0;
    state.films.map(el => {
        counterToDelete = 0;
        helpArrFilms[id].timetable = [];
        el.timetable.map(elm => {
            if (elm.time > toTime(state.minTime) && elm.time < toTime(state.maxTime)) {
                counterToDelete++;
                helpArrFilms[id].timetable.push(elm)
            }
        });
        if (counterToDelete === 0) delete helpArrFilms[id];
        id++;
    });
    return Object.assign({}, state, {
        films: helpArrFilms
    });
};

const getVisibleFilms = (state) => {
    let test = filterByDate(state);
    state.genre !== 'Все жанры' ?
        test = filterByGenre(test)
        : 0;
    state.format !== 'Все' ?
        test = filterByFormat(test)
        : 0;
    test = filterByTime(test);
    return test;
};

const mapStateToProps = (state) => ({
    state: getVisibleFilms(state)              //тут можно вызывать функцию которая будет фильровать
});

const VisibleFilmsGrid = connect(
    mapStateToProps,
    dispatch => ({})
)(FilmsGrid);

export default VisibleFilmsGrid;
