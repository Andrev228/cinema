import React          from 'react';
import * as times     from './FilmTimes/index.jsx';

require('../styles/FilmTimetable.css');

const FilmTimetable = ({ timetable }) => {
    let id = -1;
    return (<div>
         {
             timetable.map(key => {
                 id++;
                 switch (key.format) {
                     case '':
                         return <times.FilmTimeNormal
                             key={ id }
                             time={ key.time } />;
                     case '3D':
                         return <times.FilmTime3D
                             key={ id }
                             time={ key.time } />;
                     case '3DX':
                         return <times.FilmTime3DX
                             key={ id }
                             time={ key.time } />;
                     }
             })
         }
    </div>)
};

export default FilmTimetable;