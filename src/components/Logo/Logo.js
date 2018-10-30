import React from 'react';

import dogLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = () => (
    <div className={classes.Logo}  >
        <img src={dogLogo} alt="PetSearchLogo" />
    </div>
);

export default logo;