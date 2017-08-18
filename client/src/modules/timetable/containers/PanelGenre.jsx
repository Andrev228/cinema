import { connect }     from 'react-redux';
import FilterPanelDate from '../components/dropdown_menu/FilterPanelDropdown.jsx';
import { genreClick }  from '../actions/index.jsx';

const getGenres = (state) => {
    let genres = [];
    function uniqueElem(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) arr.splice(j, 1);
            }
        }
    }
    for (let i = 0; i < state.films.length; i++) {
        genres = genres.concat(state.films[i].genre);
    }
    uniqueElem(genres);
    genres.unshift('Все жанры');
    return genres;
};

const getCurrentGenre = (state) => {
    return state.genre;
};

const mapStateToProps = (state) => ({
    data: getGenres(state),
    current: getCurrentGenre(state)
});

const mapDispatchToProps = {
    onItemClick: genreClick
};

const CurrentPanelGenre = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterPanelDate);

export default CurrentPanelGenre;
