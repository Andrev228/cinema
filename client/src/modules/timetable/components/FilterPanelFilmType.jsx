import React               from 'react';
import * as FilmTypeBlocks from './FilmTypes/index.jsx';

require('../styles/FilterPanelFilmType.css');

const FilterPanelFilmType = ({ formats, current, onFilmTypeClick }) => (
    <div className="btn-group select-format" data-toggle="buttons">
        {
        formats.map(format => {
                return format === current ? (<FilmTypeBlocks.Current
                    key={formats.indexOf(format)}
                    type={format}
                    onFilmTypeClick={() => onFilmTypeClick(format === '2D' ? '' : format)}
                />) : (<FilmTypeBlocks.Block
                    key={formats.indexOf(format)}
                    type={format}
                    onFilmTypeClick={() => onFilmTypeClick(format === '2D' ? '' : format)}
                />)
                })
        }
    </div>
);

export default FilterPanelFilmType;