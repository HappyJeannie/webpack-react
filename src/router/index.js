import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from '@pages/Home'
import About from '@pages/About'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default class RouteConfig extends Component{
  render () {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Footer></Footer>
        </div>
      </Router>
    )
  }
}
