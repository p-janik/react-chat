import React from 'react'
import ChannelList from './ChannelList'
import MessageList from './MessageList'
import MessageBox from './MessageBox'
import ChatStore from '../../stores/ChatStore'

class Chat extends React.Component {
  constructor(args) {
    super(args)
  }

  static willTransitionTo(transition){
    var state = ChatStore.getState();
    if(!state.user){
      transition.redirect('/login');
    }
  }

  render() {
    return (
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
}

export default Chat