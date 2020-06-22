import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class MainPage extends Component {
    render() {

        return (
            <div>
                <h3>Thank you for not forgetting your reflections</h3>
                <h3>don't forget to like and subscribe!!</h3>
        <Link to='/feeling'><Button variant="contained" size="large" color="primary" endIcon= {<ArrowForwardIosIcon/>}>Get Started</Button></Link>
            </div>
        );
    }
};
// simple start page before starting reflections

export default connect()(MainPage);