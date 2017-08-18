import React from 'react';

const Item = ({ el, onClick }) => {
    return (
    <p className="dropdown-item"
        onClick={ onClick }
    > { el } </p>
)};

export default Item;