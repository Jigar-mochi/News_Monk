import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Fragment } from 'react';
import ScrollButton from './components/ScrollButton';
// import { Content } from './components/Styles';

const App = () => {
  const pagesize = 10
  const apik = process.env.REACT_APP_NEW_API
  console.log(process.env.REACT_APP_NEW_API)
  const [progress, setProgress] = useState(0)

  return (
    <>
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apik={apik} pagesize={pagesize} country='in' category="technology" />} />
        </Routes>
      </BrowserRouter>
      <Fragment>
        {/* <Content /> */}
        <ScrollButton />
      </Fragment>
    </>
  )
}
export default App 
