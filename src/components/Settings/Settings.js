import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Settings extends Component {
    render() {
        return (
            <div>
                <header className="nav-wrapper" style={{ padding: '12px', color: 'white' }}>
                    ← <Link to="/quotes">Go Back</Link>
                </header>
                <h1>Settings</h1>
            </div>
        );
    }
}

export default Settings;