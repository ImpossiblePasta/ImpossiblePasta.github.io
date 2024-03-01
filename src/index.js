import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import App from './App';
import Play from './pages/play/play'
import About from './pages/about/about'
import CurmHome from './pages/curm/curm_home'
import CurmCommon from './pages/curm/curm_common'

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/play' element={<Play/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/curm' element={<CurmHome/>} />
        <Route exact path='/curm/common' element={<CurmCommon/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
