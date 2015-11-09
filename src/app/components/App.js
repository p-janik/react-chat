import React from 'react'
import ChannelList from './ChannelList'
import MessageList from './MessageList'
import MessageBox from './MessageBox'
import mui from 'material-ui'
import chatTheme from '../styles/chat.theme'

let ThemeManager = mui.Styles.ThemeManager
let AppBar = mui.AppBar;

class App extends React.Component {
  constructor(args) {
    super(args)
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(chatTheme),
    }
  }

  render() {
    return (
      <div>
        <AppBar title="React chat"/>
        <div style={{
        display: 'flex',
        flexFlow: 'row',
        margin: '30px'
        }}>
          <ChannelList/>
          <MessageList/>
        </div>
        <MessageBox/>
      </div>
    )
  }
}

export default App