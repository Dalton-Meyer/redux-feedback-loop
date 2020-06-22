import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';

class SupportPage extends Component {
    state = {
        support: 0,
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })// changes the local state to the value of input
    }

    clickHandler = () => {
        const {dispatch} = this.props;
        dispatch({type:'ADD_SUPPORT', payload: this.state.support})
    } // sends the state off to be added to the global state

    render() {
      
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <TextField type='number' 
                placeholder='Support?' 
                variant='filled'
                onChange={(event)=>this.handleChange(event)}
                /> <br/>
                <Link to='/understanding'><Button variant="contained" size="large" color="primary" startIcon= {<ArrowBackIosIcon/>}>Back</Button></Link>
                <Link to='/comment'><Button onClick={this.clickHandler}variant="contained" size="large" color="primary" endIcon= {<ArrowForwardIosIcon/>}>Next</Button></Link>
            </div>
        );
    }
};
// brought in material ui for buttons and icon
// each button has a link to go either back to the last page or move forward to the next


export default connect()(SupportPage);