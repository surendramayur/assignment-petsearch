import React , { Component } from 'react';
import classes from './Careers.css';

class Careers extends Component {
    render() {
        return (
            <div className={classes.Careers}>
                <h1>We're Hiring!</h1>
                <button>Apply</button>
            </div>
        );
    }
}

export default Careers;