import React, { Component } from 'react';

export default class EditingField extends Component {
    constructor(props) {
        super(props);
        this.comment = '';
        this.Save = this.Save.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }

    Save(id) {
        this.props.actions.saveComment(id, this.comment.value);
    }

    Cancel(id) {
        this.props.actions.cancelEditing(id);
    }

    render() {
        let { comment, id } = this.props;
        return (
        <div>
            <textarea type="textarea"
                      className="comment-edit"
                      ref={input => this.comment = input}
                      defaultValue={comment} />
            <input type="button"
                   value="Сохранить"
                   onClick={this.Save.bind(null, id)} />
            <input type="button"
                   value="Отмена"
                   onClick={this.Cancel.bind(null, id)} />
        </div>)
    }
}