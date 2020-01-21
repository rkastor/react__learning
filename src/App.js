import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import HeaderBlock from './components/header/header';
import Main from './components/main/main';
import "./App.sass"

function App() {
  return (
    <Router>
      <div className="wrapper">
        <HeaderBlock link={Link}/>

        <Main />
      </div>
    </Router>
  );
}

export default App;
