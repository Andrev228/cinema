import React, { Component } from 'react';
import FilterPanel          from './FilterPanel.jsx';
import VisibleFilmsGrid     from '../containers/VisibleFilmsGrid.jsx';

export default class FilterApp extends Component {

    render () {
        return (<div className="filter">
                    <FilterPanel />
                    <VisibleFilmsGrid />
                </div>)
        }


    componentDidMount() {
        this.props.actions.getInitStore();

    }

}

