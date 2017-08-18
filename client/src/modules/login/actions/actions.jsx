import * as types from '../constants/constants.jsx';

export const successAuth = (login) => ({
    type: types.SUCCESS_AUTH,
        login
});

export const showErrors = (errors) => ({
    type: types.SHOW_ERRORS,
        errors
});