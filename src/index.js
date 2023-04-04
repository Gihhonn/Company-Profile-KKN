import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Harvets from './views/harvets'
import Pare from './views/pare'
import Tomat from './views/tomat'
import Ubimerah from './views/ubimerah'
import Buncis from './views/buncis'
import Cabai from './views/cabai'
import Landing from './views/landing'
import Timun from './views/timun'
import Ubiungu from './views/ubiungu'
import Terong from './views/terong'
import AboutUs from './views/about-us'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Harvets} exact path="/harvets" />
        <Route component={Pare} exact path="/pare" />
        <Route component={Tomat} exact path="/tomat" />
        <Route component={Ubimerah} exact path="/ubimerah" />
        <Route component={Buncis} exact path="/buncis" />
        <Route component={Cabai} exact path="/cabai" />
        <Route component={Landing} exact path="/" />
        <Route component={Timun} exact path="/timun" />
        <Route component={Ubiungu} exact path="/ubiungu" />
        <Route component={Terong} exact path="/terong" />
        <Route component={AboutUs} exact path="/about-us" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
