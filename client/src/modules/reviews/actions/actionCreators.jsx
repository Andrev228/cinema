import fetch        from 'isomorphic-fetch';
import { urlComments }    from '../../../config/url.jsx';
import { getComments,
    deleteComment,
    addComment,
    saveComment } from './actions.jsx';

export const getStore = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments', {
            credentials: 'same-origin',
        })
            .then(res => {
                return res.json();
            })
            .then(store => {
                store.comments.map(comment => {
                    comment.id = comment._id;
                    comment.date = new Date(comment.date);
                    return comment;
                });
                return store;
            })
            .then(store => {
                dispatch(getComments(store))
            });
    }

};

export const DeleteComment = (id) => {
    return (dispatch) => {
        fetch(urlComments, {
            method: 'delete',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteComment(id))
                } else {
                    return 0;
                }
            })

    }
};

export const AddComment = (name, comment) => {
    return (dispatch) => {
        let data = {
            name: name,
            comment: comment
        };
        fetch(urlComments, {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 200) {
                    res.json()
                        .then(res =>
                            dispatch(addComment(name, comment, res.id))
                        );
                } else {
                    return 0;
                }
            })

    }
};

export const SaveComment = (id, comment) => {
    return (dispatch) => {
        let data = {
            id: id,
            comment: comment
        };
        fetch(urlComments, {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch(saveComment(id, comment))
                } else {
                    return 0;
                }
            })
    }
};
