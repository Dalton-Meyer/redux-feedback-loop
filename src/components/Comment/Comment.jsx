import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        dispatch({type:'ADD_INFO', payload: this.state.comment})
    }

    render() {
      
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <input type='text' 
                placeholder='Any comments you want to leave?' 
                value={this.state.comment}
                onChange={(event)=>this.handleChange(event)}
                /> 
                <Link to='/review'><button onClick={this.clickHandler}>Next</button></Link>
            </div>
        );
    }
};



export default connect()(CommentPage);
