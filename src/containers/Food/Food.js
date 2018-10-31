import React, {Component} from'react';
import {Link} from 'react-router-dom';

import classes from './Food.css';



class food extends Component {

    render() {
        return (
            <div className={classes.Food}>
                <h1>Home Cooked Food</h1>
                <li><Link to="/fooditem" >Awesome Veg Meal</Link></li>
                <li><Link to="/fooditem" >Awesome Non-veg Meal</Link></li>
                <li><Link to="/fooditem" >Breakfast</Link></li>
            </div>            
        );
    }
}

export default food;