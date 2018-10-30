import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';


const navigationItems = () => (
    <ul className={classes.NavigationItems} >
        <NavigationItem link="/" >Home</NavigationItem>
        <NavigationItem link="/about" >About</NavigationItem>
        <NavigationItem link="/careers" >Careers</NavigationItem>
        <NavigationItem link="/contact" >Contact Us</NavigationItem>
        <NavigationItem link="/partner" >Partner With Us</NavigationItem>
        <NavigationItem link="/" >Blog</NavigationItem>
    </ul>
);

export default navigationItems;
