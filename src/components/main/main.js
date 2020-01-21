
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/home'
import page1 from '../../pages/page1'
import page2 from '../../pages/page2'
import page3 from '../../pages/page3'
import './main.sass'



    const Main = () => (
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={page1} />
            <Route path="/page2" component={page2} />
            <Route path="/page3" component={page3} />
          </Switch>
        </main>
      )
      
      export default Main