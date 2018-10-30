import React from 'react';
import classes from './GetApp.css';
import deviceImg from '../../assets/images/device.png';
import googlePlayImg from '../../assets/images/play.png';

const getApp = () => (
    <div className={classes.GetApp}>
        <div>
        <img src={deviceImg} alt="device" style={{width: '15%', margin: '5px'}} />        
        <img src={googlePlayImg} alt="GooglePlay"/>
        </div>  
        <a href = "https://play.google.com/store/apps/details?id=com.infin.petsearch&hl=en" >
            Get the App     
        </a>                         
    </div>
);


export default getApp;