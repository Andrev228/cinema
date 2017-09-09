import { connect }            from 'react-redux';
import { saveComment,
    cancelEditing }           from "../actions/actions.jsx";
import EditingField           from '../components/EditingField.jsx'
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ saveComment, cancelEditing }, dispatch)
});

const CurrentEditingField = connect(null, mapDispatchToProps)
                                    (EditingField);

export default CurrentEditingField;