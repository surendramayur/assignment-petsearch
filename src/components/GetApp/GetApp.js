import React from 'react';
import classes from './GetApp.css';
import deviceImg from '../../assets/images/device.png';
import googlePlayImg from '../../assets/images/play.png';

const getApp = () => (
    <div className={classes.GetApp}>
        <img src={deviceImg} alt="device" />
        <div>
            <a href = "https://play.google.com/store/apps/details?id=com.infin.petsearch&hl=en" >
            Get the App 
            <div><img src={googlePlayImg} alt="GooglePlay"/></div>
            </a>
        </div>        
    </div>
);

export default getApp;