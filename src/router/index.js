import React, { Component } from 'react'
import { Router, Route, Link, Switch, hashHistory } from 'react-router'

import Home from '@pages/Home'
import About from '@pages/About'

class RouteConfig extends Component{
  render () {
    return (
      <Router history={hashHistory}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    )
  }
}
export default RouteConfig
