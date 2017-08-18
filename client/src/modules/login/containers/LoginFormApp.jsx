import { connect }                   from 'react-redux';
import LoginForm                     from '../components/LoginForm.jsx';
import { validateData, isUserLogin } from '../actions/actionCreators.jsx';
import { bindActionCreators }        from 'redux';

const getCurrentState = (state) => {
    return Object.assign({}, state);
};

const mapStateToProps = (state) => ({
    state: getCurrentState(state)
});

const mapDispatchToProps = (dispatch) =>({
    actions: bindActionCreators({ validateData, isUserLogin }, dispatch)
});

const LoginFormApp = connect(mapStateToProps,
                            mapDispatchToProps)
                            (LoginForm);

export default LoginFormApp;