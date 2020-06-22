import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import MainPage from '../Main/Main'
import FeelingPage from '../Feeling/Feeling'
import UnderstandPage from '../Understand/Understand'
import SupportPage from '../Support/Support'
import CommentPage from '../Comment/Comment'
import ReviewPage from '../Review/Review'
import FeedbackPage from '../Feedback/Feedback'
import Container from '@material-ui/core/Container'


class App extends Component {
  render() {
    return (
      <Container maxWidth='lg'>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Daily Reflections!</h1> 
        </header>
        <Router>
          <Route exact path='/'>
          <MainPage/>
          </Route>
          <Route path='/feeling'>
          <FeelingPage/>
          </Route>
          <Route path='/understanding'>
          <UnderstandPage/>
          </Route>
          <Route path='/support'>
          <SupportPage/>
          </Route>
          <Route path='/comment'>
          <CommentPage/>
          </Route>
          <Route path='/review'>
          <ReviewPage/>
          </Route>
          <Route path='/feedback'>
          <FeedbackPage/>
          </Route>
        </Router>
        <br/>
      </div>
      </Container>
    );
  }
}
// sets up the constant header and all the different routes to each section of the forms.

export default App;
