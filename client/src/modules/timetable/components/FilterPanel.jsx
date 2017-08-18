import React               from 'react';
import CurrentPanelDate    from '../containers/PanelDate.jsx';
import FilterPanelFilmType from '../containers/PanelType.jsx';
import CurrentPanelGenre   from '../containers/PanelGenre.jsx';
import PanelSlider         from '../containers/PanelSlider.jsx';

require('../styles/FilterPanel.css');

const FilterPanel = () => (
    <div className="input">
        <PanelSlider />
        <CurrentPanelDate />
        <CurrentPanelGenre />
        <FilterPanelFilmType />
    </div>
);

export default FilterPanel;