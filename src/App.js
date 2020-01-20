import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import HeaderBlock from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <Router>
      <div className="">
        <HeaderBlock link={Link}/>

        <hr />

        <Main />
      </div>
    </Router>
  );
}

export default App;
