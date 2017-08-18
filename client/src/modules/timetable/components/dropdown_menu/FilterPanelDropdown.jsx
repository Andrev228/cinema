import React               from 'react';
import * as dropdownBlocks from './dropdown_items/index';

require('../../styles/FilterPanelDate.css');

const FilterPanelDropdown = ({ data, current, onItemClick }) => {
    let id = -1;
    return (
        <div className="btn-group dropdown-block">
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="date-value">{ current }</span>
            </button>
            <div className="dropdown-menu">
                {
                    data.map(key => {
                        id++;
                        return current === key ?
                            <dropdownBlocks.CurrentItem key={id}
                                                        el={key}
                                                        onClick={ () => onItemClick(key) }
                            /> :
                            <dropdownBlocks.Item key={id}
                                                 el={key}
                                                 onClick={ () => onItemClick(key) }
                            />
                    })
                }
            </div>
        </div>
    );
};

export default FilterPanelDropdown;