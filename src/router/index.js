import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from '@pages/Home'
import About from '@pages/About'

export default class RouteConfig extends Component{
  render () {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}
