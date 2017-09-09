import React, { Component } from 'react';

require('../styles/login.css');

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.loginField = '';
        this.password = '';
    }

    submit() {
        this.props.actions.validateData(this.loginField.value, this.password.value)
    }

    render() {
        let el;
        if (this.props.state.login === '') {
            el = (<form className="login-form" name="login">
                <div className="form-field">
                    <span className="field-name">Логин:</span>
                    <input type="text"
                           ref={ input => this.loginField = input } />
                </div>
                <div className="form-field">
                    <span className="field-name">Пароль:</span>
                    <input type="password"
                           ref={ input => this.password = input } />
                </div>
                <ul className="errors">
                    {
                        this.props.state.errors.map(err => {
                            return (<li key={this.props.state.errors.indexOf(err)}>{err}</li>)
                        })
                    }
                </ul>
                <input className="submit-btn"
                       type="button"
                       onClick={() => this.submit() }
                       value="Отправить" />
            </form>)
        } else {
            el = (<div className='success-login'>Вы вошли как {this.props.state.login}</div>)
        }
        return (<div>
                    {el}
                </div>)
    }

    componentDidMount() {
        this.props.actions.isUserLogin();
    }

}