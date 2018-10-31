import React from 'react';
import classes from './FoodItems.css';

const foodItems = () => (
    <div className={classes.FoodItems}>
        <h2>Item description </h2>
        <p>Quantity: Single Serving / Serves Two / Family Combo</p>
        <p>250 Grams & ½ kg & 1 kg </p>
        <h1>Plans</h1>
        <p>1 trial meal  (only for the first time user) </p>
        <p>Weekdays (Mon to Fri)</p> 
        <p>Weekends (Sat & Sun) </p>
        <p>One week (Mon-Sun)</p>
        <p>Just one meal</p>
    </div>
);

export default foodItems;