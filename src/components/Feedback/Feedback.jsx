import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import MoodIcon from '@material-ui/icons/Mood';

class FeedbackPage extends Component {


    render() {
        return (
            <div>
                <div>
                    <h1>Thank You!</h1>
                    <Link to='/'><Button variant="contained" size="large" color="primary" endIcon={<MoodIcon/>}>Leave New Feedback</Button></Link>
                </div>
            </div>
        );
    }
};
// just a basic page to show you that things have been submitted and a thank you

export default connect()(FeedbackPage);