import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';

class FeelingPage extends Component {
    state = {
        feeling: 0,
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
        console.log(event.target.value);
    }

    clickHandler = () => {
        const {dispatch} = this.props;
        dispatch({type:'ADD_FEELING', payload: this.state.feeling})
    }

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



export default connect()(FeelingPage);