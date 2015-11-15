import React from 'react'
import Login from './Login'
import ChannelList from './ChannelList'
import MessageList from './MessageList'
import MessageBox from './MessageBox'
import mui from 'material-ui'
import chatTheme from '../styles/chat.theme'
import connectToStores from 'alt/utils/connectToStores'
import ChatStore from '../../stores/ChatStore'

let ThemeManager = mui.Styles.ThemeManager
let AppBar = mui.AppBar;

@connectToStores
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

  static getStores() {
    return [ChatStore]
  }

  static getPropsFromStores() {
    return ChatStore.getState()
  }

  render() {
    let view = <Login/>

    if (this.props.user) {
      view = (
        <div>
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

    return (
      <div>
        <AppBar title="React chat"/>
        {view}
      </div>
    )
  }
}

export default App