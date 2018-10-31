import React, {Component} from 'react';
import classes from './Partner.css';
import {Link} from 'react-router-dom';

class Partner extends Component {
    render() {
        return (
            <div className={classes.Partner}>
                <h1>Partner with Us</h1>
                <h2>for</h2>
                <Link to="/form">                
                    <li>Food and Utilities</li>
                    <li>Pet Grooming and Spa</li>
                    <li>Pet Training</li>
                    <li>Dog Walking</li>
                    <li>Vet</li>
                    <li>Dog Boarding</li>
                    <li>Looking for something else?</li>
                </Link>                    
            </div>
        );
    }
}

export default Partner;