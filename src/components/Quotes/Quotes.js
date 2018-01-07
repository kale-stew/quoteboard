import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import QuoteCard from './QuoteCard';

class Quotes extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Quotes</h1>
                <div style={{ alignItems: 'center' }}>
                    <QuoteCard />
                    <QuoteCard />
                    <QuoteCard />
                </div>
            </div>
        );
    }
}

export default Quotes;