import { connect }            from 'react-redux';
import CommentsList           from '../components/CommentsList.jsx';
import { DeleteComment,
    SaveComment   }           from '../actions/actionCreators.jsx';

import { setEditableComment,
    cancelEditing }           from '../actions/actions.jsx';
import { bindActionCreators } from 'redux';

const getCommentsList = (state) => {
    return Object.assign({}, state);
};

const mapStateToProps = (state) => ({
    store: getCommentsList(state),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        DeleteComment,
        setEditableComment,
        SaveComment,
        cancelEditing
    }, dispatch)
});

const CurrentCommentsList = connect(mapStateToProps,
                                    mapDispatchToProps)
                                        (CommentsList);

export default CurrentCommentsList;