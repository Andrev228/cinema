import React             from 'react';
import { connect }       from 'react-redux';
import FilterPanelSlider from '../components/FilterPanelSlider.jsx';
import { setMinTime }    from '../actions/index.jsx';
import { setMaxTime }    from '../actions/index.jsx';

const mapStateToProps = (state) => {
    return {
        minTime: state.minTime,
        maxTime: state.maxTime
    }
};

const mapDispatchToProps = {
    setMinTime: setMinTime,
    setMaxTime: setMaxTime
};

const PanelSlider = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterPanelSlider);

export default PanelSlider;