import { Provider } from 'react-redux';
import store        from '../configureStore.jsx';
import LoginFormApp from '../containers/LoginFormApp.jsx';
import React        from 'react';

const Login = () => (
    <Provider store={store}>
        <LoginFormApp />
    </Provider>);

export default Login;