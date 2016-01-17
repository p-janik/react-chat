import React from 'react'
import {RouteHandler} from 'react-router'
import mui from 'material-ui'
import chatTheme from '../styles/chat.theme'
import ChatStore from '../../stores/ChatStore'

let ThemeManager = mui.Styles.ThemeManager
let AppBar = mui.AppBar;

class App extends React.Component {
  constructor(args) {
    super(args)
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(chatTheme),
    }
  }

  render() {
    return (
      <div>
        <AppBar title="React chat"/>
        {this.props.children}
      </div>
    )
  }
}

export default App