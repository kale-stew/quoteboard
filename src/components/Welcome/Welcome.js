import React, { Component } from 'react';
import './welcome.css';
import { Link } from 'react-router-dom';

/**
 * User can:
 *   - register a new account (render SignUp.js Modal)
 *   - sign in with an existing account (render SignIn.js Modal)
 *   - scroll down to learn more about the app --> "About"
 */

class Welcome extends Component {
    render() {
        return (
            <div className="landing-wrapper">
                <h1>Welcome</h1>
                <Link to="/quotes">go to Home View</Link>
                <Link to="/groups">go to Group View</Link>
                <Link to="/edit">go to Settings View</Link>
            </div>
        );
    }
}

export default Welcome;