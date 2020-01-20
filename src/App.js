import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import HeaderBlock from './components/header/header';
import Main from './components/main';

function App() {
  return (
    <Router>
      <div className="">
        <div className="header">
          <ul className="container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">About</Link>
            </li>
            <li>
              <Link to="/page2">Topics</Link>
            </li>
          </ul>
        </div>

        <hr />

        <Main />
      </div>
    </Router>
  );
}

export default App;
