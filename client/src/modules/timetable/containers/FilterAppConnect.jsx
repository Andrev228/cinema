import { connect }      from 'react-redux';
import { getInitStore } from '../actions/index.jsx';
import FilterApp        from '../components/FilterApp.jsx';
import { bindActionCreators }        from 'redux';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ getInitStore }, dispatch)
});

const FilterAppConnect = connect(null,
                                mapDispatchToProps)
                                (FilterApp);

export default FilterAppConnect;
