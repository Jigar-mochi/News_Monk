import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const App = ()=> {
  const pagesize = 6
  const apik = process.env.REACT_APP_NEW_API
  console.log(process.env.REACT_APP_NEW_API)
  const [progress, setProgress] = useState(0)
  // state = {
  //   progress: 0
  // }
  // setProgress = (progress) => {
  //   this.setState({
  //     progress: progress
  //   })
  // }
    return (
      <Router>
        <div>
          <LoadingBar color="#f11946" progress={progress} />
          <Navbar />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="general" /></Route>
            <Route exact path="/business"><News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="entertainment" /></Route>
            <Route exact path="/health"><News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="health" /></Route>
            <Route exact path="/science"><News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="science" /></Route>
            <Route exact path="/sports"><News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="technology" /></Route>
          </Switch>
        </div>
      </Router>
    )
}
export default App 
