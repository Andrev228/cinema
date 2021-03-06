import React    from 'react';
import { Link } from 'react-router-dom';

require('../styles/header.css');

const Header = () => (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Вход</Link>
                    </li>
                    <li>
                        <Link to="/reviews">Отзывы</Link>
                    </li>
                    <li>
                        <Link to="/timetable">Расписание</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);

export default Header;