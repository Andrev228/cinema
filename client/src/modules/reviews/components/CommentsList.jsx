import React, { Component } from 'react';
import convertDate          from '../convertDate.jsx';

require('../styles/Comments.css');

export default class CommentsList extends Component {

    constructor(props) {
        super(props);
        this.Save = this.Save.bind(this);
        this.Cancel = this.Cancel.bind(this);
        this.comment = '';
    }

    Save(id) {
        this.props.actions.SaveComment(id, this.comment.value);
    }

    Cancel(id) {
        this.props.actions.cancelEditing(id);
    }

    render() {
        let el,
            elOptions,
            id = 0;
        return (<div className="comments">
            {
                this.props.store.comments.map(comment => {
                    if (comment.editable === true) {
                        el = (<div>
                            <textarea type="textarea"
                                 className="comment-edit"
                                 ref={input => this.comment = input}
                                 defaultValue={comment.comment} />
                            <input type="button"
                               value="Сохранить"
                               onClick={this.Save.bind(null, comment.id)} />
                            <input type="button"
                               value="Отмена"
                               onClick={this.Cancel.bind(null, comment.id)} />
                        </div>)
                    } else {
                        el = (<div className="comment">
                                    {comment.comment}
                              </div>)
                    }
                    if (comment.current === true) {
                        elOptions = (<div>
                                        <span className="remove" onClick={this.props.actions.setEditableComment.bind(null, comment.id)}>Ред.</span>
                                        <span className="remove" onClick={this.props.actions.DeleteComment.bind(null, comment.id)}>Х</span>
                                     </div>)
                    } else elOptions = '';
                    return (<div className="comment-block" key={id++}>
                                <div className="comment-header">
                                    <span className="author-name">
                                        {comment.name}
                                    </span>
                                    <span className="comment-time">
                                        {convertDate(comment.date)}
                                    </span>
                                    {elOptions}
                                </div>
                                {el}
                            </div>);

                })
            }
        </div>)
    }
}