import React                 from 'react';
import convertDate           from '../convertDate.jsx';
import CurrentCommentOptions from '../containers/CurrentCommentOptions.jsx';
import CurrentEditingField   from '../containers/CurrentEditingField.jsx';
import ChangingError         from './ChangingError.jsx';

require('../styles/Comments.css');

const CommentsList = ({ comments }) => {
        let el,
            elOptions,
            elChangingErrors,
            id = 0;
        return (<div className="comments">
            {
                comments.map(comment => {

                    if (comment.editable) el = (<CurrentEditingField id={comment.id} comment={comment.comment}/>);
                    else el = (<div className="comment">{comment.comment}</div>);


                    if (comment.current) elOptions = (<CurrentCommentOptions id={ comment.id } />);

                    if (comment.changingErrors.edit) elChangingErrors = (<ChangingError>Ошибка редактирования</ChangingError>);
                    else if (comment.changingErrors.delete) elChangingErrors = (<ChangingError>Не удалось удалить комментарий</ChangingError>);


                    return (<div className="comment-block" key={id++}>
                                <div className="comment-header">
                                    <span className="author-name">{comment.name}</span>
                                    <span className="comment-time">{convertDate(comment.date)}</span>
                                { elChangingErrors }
                                { elOptions }
                                </div>
                                {el}
                            </div>);
                })
            }
        </div>)
    };

export default CommentsList;