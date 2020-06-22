import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';

class CommentPage extends Component {
    state = {
        comment: '',
    }

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        })
        console.log(event.target.value);
    }

    clickHandler = () => {
        const {dispatch} = this.props;
        dispatch({type:'ADD_COMMENT', payload: this.state.comment})
    }

    render() {
      
        return (
            <div>
                <h2>Any comments you would like to add?</h2>
                <TextField type='text' 
                placeholder='Any comments you want to leave?' 
                variant='filled'
                fullWidth
                onChange={(event)=>this.handleChange(event)}
                /> <br/>
                <Link to='/support'><Button variant="contained" size="large" color="primary" startIcon= {<ArrowBackIosIcon/>}>Back</Button></Link>
                <Link to='/review'><Button onClick={this.clickHandler}variant="contained" size="large" color="primary" endIcon= {<ArrowForwardIosIcon/>}>Next</Button></Link>
            </div>
        );
    }
};



export default connect()(CommentPage);
