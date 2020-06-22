import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class ReviewPage extends Component {

    submitHandler = () => {
        const {infoReducer, dispatch} = this.props;
        Axios.post('/reflect', infoReducer)
        .then((res)=>{console.log('Heeeeey!', res.status) 
        dispatch({type:'RESTART_INFO'})})
        .catch((error)=>{console.log(error)});
    }// sends off everything you stored from the previous pages in the global state out to the database

    render() {
      const {infoReducer} = this.props; // brings in the global state to display info on page
        return (
            <div>
                <h2>Review Your FeedBack</h2>
                <h3>Feeling: {infoReducer.feeling}</h3>
                <h3>Understanding: {infoReducer.understanding}</h3>
                <h3>Support: {infoReducer.support}</h3>
                <h3>Comments: {infoReducer.comment}</h3>
                <Link to='/comment'><Button variant="contained" size="large" color="primary" startIcon= {<ArrowBackIosIcon/>}>Back</Button></Link>
                <Link to='/feedback'><Button onClick={this.submitHandler} variant="contained" size="large" color="primary" endIcon= {<PublishIcon/>}>Submit</Button></Link>
                
            </div>
        );
    }
};
// just displays everything you have filled out so far 
// also has a back button and the final submit button to send information off to database
const mapStateToProps = (state) => {
  return { // brings the global state in as a prop
    infoReducer: state.infoReducer
  };
};

export default connect(mapStateToProps)(ReviewPage);