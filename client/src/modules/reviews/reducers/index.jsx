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
                comment: action.text,
                current: true,
                editable: false,
                date: new Date(),
                changingErrors: {
                    edit: false,
                    delete: false
                }
            });
            return newStore0;

        case types.SET_EDITABLE_COMMENT:                                  //changeEditableMode
            let newStore = Object.assign({}, store);
            newStore.comments.map(comment => {
                comment.editable = (comment.id === action.id);
            });
            return newStore;

        case types.DELETE_COMMENT:                                        //changeEditableMode
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


        case types.SHOW_DELETE_COMMENT_ERROR:
            let newStore4 = Object.assign([], store);
            newStore4.comments.map(comment => {
                comment.id === action.id ?
                    comment.changingErrors = {
                        edit: false,
                        delete: true
                } : 0;
            });
            return newStore4;

        case types.SHOW_EDIT_COMMENT_ERROR:
            let newStore5 = Object.assign([], store);
            newStore5.comments.map(comment => {
                if (comment.id === action.id) {
                    comment.editable = false;
                    comment.changingErrors = {
                        edit: true,
                        delete: false
                    }
                }
            });
            return newStore5;

        default: return store;
    }
};

export default reducer;