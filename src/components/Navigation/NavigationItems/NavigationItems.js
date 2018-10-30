import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems} >
        <NavigationItem link="/" active >About</NavigationItem>
        <NavigationItem link="/" >Careers</NavigationItem>
        <NavigationItem link="/" >Contact Us</NavigationItem>
        <NavigationItem link="/" >Partner With Us</NavigationItem>
        <NavigationItem link="/" >Blog</NavigationItem>
    </ul>
);

export default navigationItems;