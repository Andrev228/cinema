import { connect }            from 'react-redux';
import ReviewsApp             from '../components/ReviewsApp.jsx';
import { getStore }           from '../actions/actionCreators.jsx';
import { bindActionCreators } from 'redux';

const setCurrentStore = (state) => {
    return Object.assign({}, state);
};

const mapStateToProps = (state) => ({
    store: setCurrentStore(state),
});


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ getStore }, dispatch)
});

const CurrentReviewsAppStore = connect(mapStateToProps,
                                        mapDispatchToProps)
                                            (ReviewsApp);

export default CurrentReviewsAppStore;