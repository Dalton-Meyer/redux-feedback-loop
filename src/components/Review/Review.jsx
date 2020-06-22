import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";

class ReviewPage extends Component {

    submitHandler = () => {
        const {infoReducer, dispatch} = this.props;
        Axios.post('/reflect', infoReducer)
        .then((res)=>{console.log('Heeeeey!', res.status) 
        dispatch({type:'RESTART_INFO'})})
        .catch((error)=>{console.log(error)});
    }

    render() {
      const {infoReducer} = this.props;
      console.log(infoReducer);
        return (
            <div>
                <h2>Review Your FeedBack</h2>
                <h3>Feeling: {infoReducer.feeling}</h3>
                <h3>Understanding: {infoReducer.understanding}</h3>
                <h3>Support: {infoReducer.support}</h3>
                <h3>Comments: {infoReducer.comment}</h3>
                <Link to='/feedback'><button onClick={this.submitHandler}>Submit</button></Link>
                <Link to='/comment'><button>Back</button></Link>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
  return {
    infoReducer: state.infoReducer
  };
};

export default connect(mapStateToProps)(ReviewPage);