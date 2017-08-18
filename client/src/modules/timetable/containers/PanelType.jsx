import { connect }         from 'react-redux';
import FilterPanelFilmType from '../components/FilterPanelFilmType.jsx';
import { filmTypeClick }   from '../actions/index.jsx';

const getCurrentFilmType = (state) => {
    return state.format;
};

const mapStateToProps = (state) => ({
    formats: ['Все', '2D', '3D', '3DX'],
    current: getCurrentFilmType(state),
});

const mapDispatchToProps = {
    onFilmTypeClick: filmTypeClick,           //тут можно вызвать action
};

const CurrentPanelDate = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterPanelFilmType);

export default CurrentPanelDate;
