import React, { Component } from 'react';
import './welcome.css';

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
            </div>
        );
    }
}

export default Welcome;