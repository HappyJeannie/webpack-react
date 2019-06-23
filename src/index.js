import React from 'react'
import ReactDOM from 'react-dom'
console.log(ReactDOM)
import App from './App'
import 'reset-css';
import { Router, Route, Link, Switch, browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from '@pages/Home'
import About from '@pages/About'


ReactDOM.render(<Router history={browserHistory}>
    <Route path='/' component={Home}>
      <Route path='about' component={About} />
      <Route path='home' component={About} />
    </Route>
  </Router>,
  document.getElementById('root'))


/*
const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
   <Component />,
    document.getElementById('root'),
  )
}

render(Route);
*/
