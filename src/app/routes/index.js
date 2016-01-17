import React from 'react'
import { render } from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from '../components/App'
import Login from '../components/Login'
import Chat from '../components/Chat'

import { Router, Route, IndexRoute } from 'react-router'

let routes = (
  <Router history={createBrowserHistory({  queryKey: false  })}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>

      <Route path="chat" component={Chat}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
)

render(routes, document.getElementById('app-container'))