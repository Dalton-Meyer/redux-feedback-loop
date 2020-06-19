import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SupportPage extends Component {
    state = {
        support: 0,
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
        console.log(event.target.value);
    }

    clickHandler = () => {
        const {dispatch} = this.props;
        dispatch({type:'ADD_INFO', payload: this.state.support})
    }

    render() {
      
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <input type='number' 
                placeholder='Support?' 
                value={this.state.support}
                onChange={(event)=>this.handleChange(event)}
                /> 
                <Link to='/comment'><button onClick={this.clickHandler}>Next</button></Link>
            </div>
        );
    }
};



export default connect()(SupportPage);