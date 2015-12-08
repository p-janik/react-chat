import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import App from '../components/App'
import Login from '../components/Login'
import Chat from '../components/Chat'

let {Route, DefaultRoute, HashLocation} = Router

let routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Chat}/>

    <Route path="chat" handler={Chat}/>
    <Route path="login" handler={Login}/>
  </Route>
)

Router.run(routes, HashLocation, Root => {
  ReactDOM.render(<Root/>, document.getElementById('app-container'))
})