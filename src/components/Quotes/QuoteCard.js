import React, { Component } from 'react';
import './card.css';
import upIcon from '../../assets/up_purple.svg';
import downIcon from '../../assets/down_purple.svg';

class QuoteCard extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="card-content">
                    <div className="vote-wrapper">
                        <img src={upIcon} style={{ width: '18px' }} alt="up vote"/>
                        <img src={downIcon} style={{ width: '18px' }} alt="down vote"/>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteCard;