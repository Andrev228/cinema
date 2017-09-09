import { connect }            from 'react-redux';
import CommentsList           from '../components/CommentsList.jsx';
import { SaveComment }        from '../actions/actionCreators.jsx';
import { cancelEditing }      from '../actions/actions.jsx';
import { bindActionCreators } from 'redux';

const getCommentsList = (state) => {
    return Object.assign([], state.comments);
};

const mapStateToProps = (state) => ({
    comments: getCommentsList(state),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        SaveComment,
        cancelEditing
    }, dispatch)
});

const CurrentCommentsList = connect(mapStateToProps,
                                    mapDispatchToProps)
                                        (CommentsList);

export default CurrentCommentsList;