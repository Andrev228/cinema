import React         from 'react';
import FilmTimetable from './FilmTimetable.jsx';

require('../styles/FilmBlock.css');

const FilmBlock = ({ title, image, timetable }) => (
    <div className="film">
        <a href="movie/2">
            <div className="film-img">
                <img src={image}
                     width="100%"
                     height="100%" />
            </div>
            <span className="film-title">{title}</span>
        </a>
        <div className="timetable">
            <FilmTimetable
                timetable={timetable}
            />
        </div>
    </div>
);

export default FilmBlock;
