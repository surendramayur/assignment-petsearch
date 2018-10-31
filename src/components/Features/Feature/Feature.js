import React from 'react';
import classes from './Feature.css';

const feature = (props) => (
    <div className={classes.Feature}>{props.children}</div>
);

export default feature;