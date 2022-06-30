import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pagesize = 6
  apik = "836a9df728d14ea086a846885f4fd185"
  state = {
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {

    return (
      <Router>
        <div>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apik={this.apik} pagesize={this.pagesize} country='in' category="general" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apik={this.apik} pagesize={this.pagesize} country='in' category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apik={this.apik} pagesize={this.pagesize} country='in' category="entertainment" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apik={this.apik} pagesize={this.pagesize} country='in' category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apik={this.apik} pagesize={this.pagesize} country='in' category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apik={this.apik} pagesize={this.pagesize} country='in' category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apik={this.apik} pagesize={this.pagesize} country='in' category="technology" /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

