import React from 'react';
import './App.css';
import ArtHeader from "./components/art_header.js"

import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      {ArtHeader("UNAMUSED")}
      <h1>TEST OF HOME PAGE</h1>
      <h2>
        <Link to="/unamused">Unamused</Link>
      </h2>
      <h2>
        <Link to="/curm">CURM</Link>
      </h2>
      <h3>
      text
      </h3>
    </div>
  );
}

export default App;
