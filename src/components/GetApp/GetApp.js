import React from 'react';
import classes from './GetApp.css';
import deviceImg from '../../assets/images/device.png';
import googlePlayImg from '../../assets/images/play.png';

const getApp = () => (
    <div className={classes.GetApp}>
        <img src={deviceImg} alt="device" />
        <div>
        <img src={googlePlayImg} alt="GooglePlay"/>
        <a href = "https://play.google.com/store/apps/details?id=com.infin.petsearch&hl=en" >
            Get the App     
        </a> 
        </div>                  
    </div>
);

export default getApp;