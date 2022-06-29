// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pagesize = 10
  render() {
    

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/"><News pagesize={this.pagesize} country='in' category="general" /></Route>
            <Route exact path="/business"><News pagesize={this.pagesize} country='in' category="business" /></Route>
            <Route exact path="/entertainment"><News pagesize={this.pagesize} country='in' category="entertainment" /></Route>
            <Route exact path="/health"><News  pagesize={this.pagesize} country='in' category="health" /></Route>
            <Route exact path="/science"><News pagesize={this.pagesize} country='in' category="science" /></Route>
            <Route exact path="/sports"><News  pagesize={this.pagesize} country='in' category="sports" /></Route>
            <Route exact path="/technology"><News pagesize={this.pagesize} country='in' category="technology" /></Route>
          </Switch>


        </div>
      </Router>

    )
  }
}

