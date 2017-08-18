import React from 'react';

const Current = ({ id, type, onFilmTypeClick }) => (
        <label className="btn btn-primary active"
               onClick={onFilmTypeClick}>
            <input type="radio"
                   name="options"
                   autoComplete="off" />{ type }
        </label>
    );

export default Current;