
import React from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';
import Button from '../UI/Button/Button';
import classes from './Form.css';

const form = (props) => {
    return (
        <Aux>
            <div className={classes.Form}>
            <form>
                form
            </form>
            <Button btnType="Danger" clicked={props.cancel} >CANCEL</Button>
            <Button btnType="Success" clicked={props.submit} >SUBMIT</Button> 
            </div>
            
        </Aux>
    );   
};

    


export default form;