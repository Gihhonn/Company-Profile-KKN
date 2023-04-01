import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Harvets from './views/harvets'
import Buncis from './views/buncis'
import Landing from './views/landing'
import AboutUs from './views/about-us'
import Cabai from './views/cabai'
import Pare from './views/pare'
import Terong from './views/terong'
import Timun from './views/timun'
import Tomat from './views/tomat'
import Ubimerah from './views/ubimerah'
import Ubiungu from './views/ubiungu'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Harvets} exact path="/harvets" />
        <Route component={Buncis} exact path="/buncis" />
        <Route component={Landing} exact path="/" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Cabai} exact path="/cabai" />
        <Route component={Pare} exact path="/pare" />
        <Route component={Terong} exact path="/terong" />
        <Route component={Timun} exact path="/timun" />
        <Route component={Tomat} exact path="/tomat" />
        <Route component={Ubimerah} exact path="/ubimerah" />
        <Route component={Ubiungu} exact path="/ubiungu" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
