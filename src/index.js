import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import App from './App';
import Play from './pages/play/play'
import Effects from './pages/play/effects'
import About from './pages/about/about'
import FAQ from './pages/about/faq'

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/play' element={<Play/>} />
        <Route exact path='/effects' element={<Effects/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/faq' element={<FAQ/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
