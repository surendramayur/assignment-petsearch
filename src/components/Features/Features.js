import React from 'react';
import classes from './Features.css';
import Feature from './Feature/Feature';

const features = () => (
    <div className={classes.Features}>
        <Feature>
            <h3>Adoption</h3>
            <p>Cause every pet deserves a home like you do.</p>
        </Feature>
        <Feature>
            <h3>Report lost pet</h3>
            <p>Get connected to our community to help the pet get back home.</p>
        </Feature>
        <Feature>
            <h3>Pets 101</h3>
            <p>
                Know your pet before you get ‘em!
                Read, learn and adhere to the right vaccination schedule.
            </p>
        </Feature>
        <Feature>
            <h3>Find Vets</h3>
            <p>Cause every pet deserves a home like you do.</p>
        </Feature>
        <Feature>
            <h3>Find Shelters</h3>
            <p>Going somewhere? Search for kennels to take care of your loved one while you’re gone.</p>
        </Feature>
    </div>
);

export default features;