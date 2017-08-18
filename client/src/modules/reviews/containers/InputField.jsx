import { connect }            from 'react-redux';
import InputForm              from '../components/InputForm.jsx';
import { AddComment }         from '../actions/actionCreators.jsx';
import { bindActionCreators } from 'redux';

const getLogin = (state) => {
    return state.login;
};

const mapStateToProps = (state) => ({
    login: getLogin(state)
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ AddComment }, dispatch)
});

const InputField = connect(mapStateToProps,
                            mapDispatchToProps)
                            (InputForm);

export default InputField;