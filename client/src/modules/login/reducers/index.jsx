import * as types from '../constants/constants.jsx';

const reducer = (store, action) => {
    switch (action.type) {
        case types.SHOW_ERRORS:
            let newStore = Object.assign({}, store, {errors: action.errors});
            return newStore;
        case types.SUCCESS_AUTH:
            let newStore1 = Object.assign({}, store, {login: action.login});
            return newStore1;
        default:
            return store;
    }
};

export default reducer;