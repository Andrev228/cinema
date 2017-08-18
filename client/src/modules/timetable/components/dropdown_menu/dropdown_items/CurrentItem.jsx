import React from 'react';

const CurrentItem = ({ el, onClick }) => {
    return (
        <p className="dropdown-item current"
           onClick={ onClick }
        > { el } </p>
    );
};

export default CurrentItem;