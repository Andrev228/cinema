import * as types from '../constants/constants.jsx';

export const getComments = (store) => ({
    type: types.GET_COMMENTS,
        store
});

export const deleteComment = (id) => ({
    type: types.DELETE_COMMENT,
        id
});

export const addComment = (name, comment, id) => ({
    type: types.ADD_COMMENT,
        name,
        text: comment,
        id
});

export const saveComment = (id, comment) => ({
        type: types.SAVE_COMMENT,
        id,
        comment
    });

export const setEditableComment = (id) => ({
    type: types.SET_EDITABLE_COMMENT,
    id
});

export const cancelEditing = (id) => ({
    type: types.CANCEL_EDITING,
    id
});

export const showDeleteCommentError = (id) => ({
    type: types.SHOW_DELETE_COMMENT_ERROR,
    id
});

export const showEditCommentError = (id) => ({
    type: types.SHOW_EDIT_COMMENT_ERROR,
    id
});