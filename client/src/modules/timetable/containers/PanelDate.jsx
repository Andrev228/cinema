import { connect }         from 'react-redux';
import FilterPanelDropdown from '../components/dropdown_menu/FilterPanelDropdown.jsx';
import { dateClick }       from '../actions/index.jsx';

const getDates = (state) => {
    let dates = [];
    for (let key in state.films[0].timetable) {
        dates.push(key);
    }
    return dates;
};

const getCurrentDate = (state) => {
    return state.date;
};

const mapStateToProps = (state) => ({
    data: getDates(state),                    //тут можно вызывать функцию которая будет фильровать тут же в контейнере
    current: getCurrentDate(state)
});

const mapDispatchToProps = {
    onItemClick: dateClick
};

const CurrentPanelDate = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterPanelDropdown);

export default CurrentPanelDate;
