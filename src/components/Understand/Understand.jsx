import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';

class UnderstandPage extends Component {
    state = {
        understanding: 0,
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
        console.log(event.target.value);
    }

    clickHandler = () => {
        const {dispatch} = this.props;
        dispatch({type:'ADD_UNDERSTANDING', payload: this.state.understanding})
    }

    render() {
      
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <TextField type='number' 
                placeholder='Understanding?' 
                variant='filled'
                onChange={(event)=>this.handleChange(event)}
                /> <br/>
                <Link to='/feeling'><Button variant="contained" size="large" color="primary" startIcon= {<ArrowBackIosIcon/>}>Back</Button></Link>
                <Link to='/support'><Button onClick={this.clickHandler}variant="contained" size="large" color="primary" endIcon= {<ArrowForwardIosIcon/>}>Next</Button></Link>
                
            </div>
        );
    }
};



export default connect()(UnderstandPage);