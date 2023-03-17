import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Harvets from './views/harvets'
import Landing from './views/landing'
import AboutUs from './views/about-us'
import Buncis from './views/buncis'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Harvets} exact path="/harvets" />
        <Route component={Landing} exact path="/" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Buncis} exact path="/buncis" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
