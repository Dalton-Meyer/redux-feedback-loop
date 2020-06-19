import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        dispatch({type:'ADD_INFO', payload: this.state.feeling})
    }

    render() {
      
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <input type='number' 
                placeholder='Feelings?' 
                value={this.state.feeling}
                onChange={(event)=>this.handleChange(event)}
                /> 
                <Link to='/understanding'><button onClick={this.clickHandler}>Next</button></Link>
            </div>
        );
    }
};



export default connect()(FeelingPage);