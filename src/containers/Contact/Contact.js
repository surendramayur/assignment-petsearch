import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './Contact.css';
import Button from '../../components/UI/Button/Button';

class Contact extends Component {
    render() {
        return (
            <div className={classes.Contact}>
                <h1>Contact Us</h1>
                <p>Call us at: 9898989898</p>
                <p>email us at: <a href='/'>contact@petsearch.in</a></p>
                <Button ><Link to="/form">Apply</Link></Button>
            </div>
        );
    }
}

export default Contact;