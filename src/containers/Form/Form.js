
import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';
import Button from '../../components/UI/Button/Button';
import classes from './Form.css';

class form extends Component  {

    state = {
        name: '',
        mobile: '',
        email: '',
        more: ''
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value});
    }
    handleChangeMobile = (event) => {
        this.setState({mobile: event.target.value});
    }
    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }
    handleChangeMore = (event) => {
        this.setState({more: event.target.value});
    }

    handleSubmit = (event) => {
        alert('Form Submitted!! \n name: '
        + this.state.name + '\n mobile:  ' 
        + this.state.mobile +'\n email: '
        + this.state.email +'\n more '
        + this.state.more);
        window.location.reload();

    }

    render() {
        return (
        <Aux>
            <div className={classes.Form}>
            <form>
                <label>
                    <div>
                        Name:
                        <input type="text"  onChange={this.handleChangeName} /> 
                    </div>
                    <div>
                        Mobile:
                        <input type="text"  onChange={this.handleChangeMobile} />
                    </div>
                    <div>
                        Email:
                        <input type="email"  onChange={this.handleChangeEmail} />
                    </div>
                    <div>
                        Tell us more:
                        <textarea  onChange={this.handleChangeMore} /> 
                    </div>                   
                </label>                               
            </form> <Button clicked={this.handleSubmit}>SUBMIT</Button>            
            </div>            
        </Aux>
        );
    }       
};

    


export default form;