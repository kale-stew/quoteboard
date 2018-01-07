import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import quoteIcon from '../../assets/quote.svg';
import groupIcon from '../../assets/group.svg';

function NavBar() {
    return (
        <header className="nav-wrapper">
            <div className="user-info">
                <Link to="/edit"><div className="user-icon"></div></Link>
                <div><i>Welcome Back, user.name</i></div>
            </div>
            <div className="nav-content">
                <Link to="/quotes"><img src={quoteIcon} style={{ width: '26px' }} alt="home"/></Link>
                <Link to="/groups"><img src={groupIcon} style={{ width: '26px' }} alt="groups"/></Link>
            </div>
        </header>
    );
}

export default NavBar;