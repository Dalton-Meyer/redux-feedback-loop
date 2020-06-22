import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class FeedbackPage extends Component {


    render() {
        return (
            <div>
                <div>
                    <h1>Feedback!</h1>
                </div>
                <div>
                    <h1>Thank You!</h1>
                    <Link to='/'><button>Leave New Feedback</button></Link>
                </div>
            </div>
        );
    }
};


export default connect()(FeedbackPage);