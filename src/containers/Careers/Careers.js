import React , { Component } from 'react';
import {Link} from 'react-router-dom';

import classes from './Careers.css';
import Button from '../../components/UI/Button/Button';

class Careers extends Component {
    render() {
        return (
            <div className={classes.Careers}>
                <h1>We're Hiring!</h1>
                <p>Send your Info to <a href='/'>careers@petsearch.in</a></p>
                <Button ><Link to="/form">Apply</Link></Button>
                
                
            </div>
            
        );
    }
}

export default Careers;