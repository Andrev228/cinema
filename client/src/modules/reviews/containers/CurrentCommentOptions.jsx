import CommentOptions         from '../components/CommentOptions.jsx';
import { DeleteComment }      from '../actions/actionCreators.jsx';
import { setEditableComment } from "../actions/actions.jsx";
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ DeleteComment,
        setEditableComment }, dispatch)
});

const CurrentCommentOptions = connect(null, mapDispatchToProps)
                                (CommentOptions);

export default CurrentCommentOptions;