import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';

class FeelingPage extends Component {
    state = {
        feeling: '',
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    clickHandler = () => {
        const {dispatch} = this.props;
        if(this.state.feeling !== undefined || this.state.feeling !== ''){
        dispatch({type:'ADD_FEELING', payload: this.state.feeling})
        } else { alert('please input valid number')}
    }
    // sends a dispatch to add the information from the form to the global state

    render() {
      
        return (
            <div>
                <h2>How are you feeling today?</h2>
               
                <TextField type='number' 
                placeholder='Feelings?' 
                variant="filled"
                onChange={(event)=>this.handleChange(event)}
                /> <br/>
                 <Link to='/'><Button variant="contained" size="large" color="primary" startIcon= {<ArrowBackIosIcon/>}>Back</Button></Link>
                <Link to='/understanding'><Button onClick={this.clickHandler}variant="contained" size="large" color="primary" endIcon= {<ArrowForwardIosIcon/>}>Next</Button></Link>
            </div>
        );
    }
};
// brought in material ui for buttons and icon
// each button has a link to go either back to the last page or move forward to the next


export default connect()(FeelingPage);