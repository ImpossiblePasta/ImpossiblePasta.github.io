import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>TEST OF HOME PAGE</h1>
      <h2>
        <Link to="/unamused">Unamused</Link>
      </h2>
    </div>
  );
}



export default App;
