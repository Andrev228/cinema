import React     from 'react';
import FilmBlock from './FilmBlock.jsx';

require('../styles/FilmsGrid.css');

const FilmsGrid = ({ state }) => {
    let id = -1;
    return (<div className="film-grid">
        {
            state.films.map(film => {
                id++;
                return (<FilmBlock
                    key={id}
                    title={film.title}
                    image={film.image}
                    timetable={film.timetable}   //массив объедков
                />)
            })}
    </div>
)};

export default FilmsGrid;