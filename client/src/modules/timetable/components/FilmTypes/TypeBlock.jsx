import React from 'react';

const Block = ({ type, onFilmTypeClick }) => (
        <label className="btn btn-primary"
               onClick={onFilmTypeClick} >
            <input type="radio"
                   name="options"
                   autoComplete="off" />{ type }
        </label>
    );

export default Block;