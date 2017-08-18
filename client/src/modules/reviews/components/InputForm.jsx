import React, { Component } from 'react';

require('../styles/InputForm.css');

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this._addComment = this._addComment.bind(this);
        this.comment = '';
    }
    _addComment() {
        let comment = this.comment.value,
            add = this.props.actions.AddComment;
        add(this.props.login, comment);
    }
    render() {
        let el;
        if (this.props.login === '') {
            el = (<div className="input-block">
                    <span>Что бы оставить комментарий выполните <a href="/">вход</a></span>
                  </div>)
        } else {
            el = (<div className="input-block">
                    <span className="login-field">Вы вошли как <span className="login">{this.props.login}</span></span>
                    <textarea rows="4" placeholder="Комментарий..." ref={input => this.comment = input} />
                    <input className="add_button" type="button" onClick={() => this._addComment()} value="Добавить" />
                  </div>)
        }
        return (<div>
            {el}
            </div>);
    }
}
