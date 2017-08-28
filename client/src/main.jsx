import React                  from 'react';
import { render }             from 'react-dom';
import FilterApp              from './modules/timetable/components/FilterAppCreateStore.jsx';
import ReviewsAppInitStore    from './modules/reviews/components/ReviewsAppInitStore.jsx';
import Login                  from './modules/login/components/Login.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header                 from './modules/header/components/Header.jsx';

render(
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={ Login } />
            <Route path="/reviews" component={ ReviewsAppInitStore } />
            <Route path="/timetable" component={ FilterApp } />
        </div>
    </Router>,
    document.getElementById('content')
);