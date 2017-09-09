import fetch        from 'isomorphic-fetch';
import { urlComments }    from '../../../config/url.jsx';
import { getComments,
    deleteComment,
    addComment,
    saveComment,
    showDeleteCommentError,
    showEditCommentError} from './actions.jsx';

export const getStore = () => {
    return async (dispatch) => {

        const changeCommentForClientApp = (comment) => {
            comment.id = comment._id;
            comment.date = new Date(comment.date);
            comment.changingErrors = {
                edit: false,
                delete: false
            };
            delete comment._id;
            return comment;
        };

        let serverResponse = await fetch(urlComments, {
            credentials: 'same-origin',
        });

        serverResponse
            .json()
            .then(async store => {
                store.comments = await Promise.all(store.comments.map(comment => {
                    comment = changeCommentForClientApp(comment);
                    return comment;
                }));
                return store;
            })
            .then(store => {
                dispatch(getComments(store))
            });
    }

};

export const DeleteComment = (id) => {
    return async (dispatch) => {
        let serverResponse = await fetch(urlComments, {
            method: 'delete',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id }),
        });
            serverResponse.status === 200 ?
                dispatch(deleteComment(id))
                : dispatch(showDeleteCommentError(id))

    }
};

export const AddComment = (name, comment) => {
    return async (dispatch) => {
        let data = {
            name: name,
            comment: comment
        };
        let serverResponse = await fetch(urlComments, {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
            serverResponse.status === 200 ?
                serverResponse
                    .json()
                    .then(res =>
                        dispatch(addComment(name, comment, res.id))
                    ) : 0;
    }
};

export const SaveComment = (id, comment) => {
    return async (dispatch) => {

        if (comment === '') dispatch(showEditCommentError(id));
        else {
            let data = { id, comment };

            let serverResponse = await fetch(urlComments, {
                method: 'put',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

                serverResponse.status === 200 ?
                    dispatch(saveComment(id, comment))
                        : dispatch(showEditCommentError(id))
        }
    }
};
