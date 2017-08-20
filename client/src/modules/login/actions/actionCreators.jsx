import fetch          from 'isomorphic-fetch';
import { urlLogin }   from '../../../config/url.jsx';
import { successAuth,
         showErrors } from './actions.jsx';

export const validateData = (login, password) => {
    return async dispatch => {
        let errors = [];

        if (login.length === 0) errors.push('Введите логин');
        else {
            if (login.length < 3) errors.push('Логин должен быть минимум 2 символа');
            else {
                if (!/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(login)) errors.push('Логин содержит недопустимые символы');
            }
        }
        if (password.length === 0) errors.push('Введите пароль');
        else {
            if (password.length < 5) errors.push('Пароль должен быть минимум 5 символов');
            else {
                if (!/[A-Za-z0-9]/.test(password)) errors.push('Пароль содержит недопустимые символы');
            }
        }
        if (errors.length > 0) {
            dispatch(showErrors(errors));
        } else {
            let serverResponse = await fetch(urlLogin, {
                method: 'post',
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login, password})
            });

            serverResponse.status === 200 ?
                serverResponse.json()
                    .then(result => {
                        dispatch(successAuth(result.login))
                    }) : serverResponse.json()
                            .then(result => {
                                errors = [result.errors];
                                dispatch(showErrors([result.errors]))
                            });
        }
    };
};

export const isUserLogin = () => {
    return async dispatch => {
        try {
        let serverResponse = await fetch(urlLogin, {
            method: 'get',
            credentials: 'include'
        });

        serverResponse
            .json()
            .then(result => {
                result.login ? dispatch(successAuth(result.login)) : 0;
            })
        } catch (err) {
            console.log(err);
        }
    }
};