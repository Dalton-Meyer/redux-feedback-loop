import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        dispatch({type:'ADD_INFO', payload: this.state.understanding})
    }

    render() {
      
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <input type='number' 
                placeholder='Understanding?' 
                value={this.state.feeling}
                onChange={(event)=>this.handleChange(event)}
                /> 
                <Link to='/support'><button onClick={this.clickHandler}>Next</button></Link>
            </div>
        );
    }
};



export default connect()(UnderstandPage);