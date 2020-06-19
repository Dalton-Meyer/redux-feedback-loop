import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MainPage extends Component {
    render() {
      
        return (
            <div>
                <h3>Thank you for not forgetting your reflections</h3>
                <h3>don't forget to like and subscribe!!</h3>
                <Link to='/feeling'><button>Get Started</button></Link>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
  return {
    
  };
};

export default connect(mapStateToProps)(MainPage);