import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import axios from 'axios';
import './App.css';
import MainPage from '../Main/Main'
import FeelingPage from '../Feeling/Feeling'
import UnderstandPage from '../Understand/Understand'
import SupportPage from '../Support/Support'
import CommentPage from '../Comment/Comment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
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

          </Route>
          <Route path='/feedback'>

          </Route>


        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
