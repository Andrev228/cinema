import React                from 'react';
import CurrentCommentsList  from '../containers/CurrentCommentsList.jsx';
import InputField           from '../containers/InputField.jsx';

require('../styles/Main.css');


export default class ReviewsApp extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.actions.getStore();
    }

    render() {
        return (<div className="main">
                    <InputField />
                    <CurrentCommentsList />
                </div>)
    }

}