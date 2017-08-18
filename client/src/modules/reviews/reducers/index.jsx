import * as types from '../constants/constants.jsx';



const reducer = (store, action) => {
    switch (action.type) {

        case types.GET_COMMENTS:
            return Object.assign({}, action.store);

        case types.ADD_COMMENT:
            let newStore0 = Object.assign({}, store);
            newStore0.comments.push({
                id: action.id,
                name: action.name,
                comment: action.comment,
                current: true,
                editable: false,
                date: new Date()
            });
            return newStore0;

        case types.SET_EDITABLE_COMMENT:
            let newStore = Object.assign({}, store);
            newStore.comments.map(comment => {
                comment.editable = (comment.id === action.id);
            });
            return newStore;

        case types.DELETE_COMMENT:
            let newStore2 = Object.assign({}, store);
            newStore2.comments = newStore2.comments.filter(comment => {
                return comment.id !== action.id;
            });
            return newStore2;

        case types.SAVE_COMMENT:
            let newStore3 = Object.assign({}, store);
            newStore3.comments.map(comment => {
                if (comment.id === action.id) {
                    comment.comment = action.comment;
                    comment.editable = false;
                    comment.date = new Date();
                }
            });
            return newStore3;

        case types.CANCEL_EDITING:
            let newStore1 = Object.assign([], store);
            newStore1.comments.map(comment => {
                (comment.id === action.id) ? comment.editable = false : 0;
            });
            return newStore1;

        default: return store;
    }
};

export default reducer;