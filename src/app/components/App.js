import React from 'react'
import ChannelList from './ChannelList'
import MessageList from './MessageList'
import MessageBox from './MessageBox'

class App extends React.Component {
  constructor(args) {
    super(args)
  }

  render() {
    return (
      <div>
        <div>
          <ChannelList/>
          <MessageList/>
        </div>
        <MessageBox/>
      </div>
    )
  }
}

export default App