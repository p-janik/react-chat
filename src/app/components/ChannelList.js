import React from 'react'
import Channel from './Channel'

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [
        'channel1123123',
        'wtf',
      ]
    }
  }

  render() {
    let channelNodes = this.state.channels.map(channel => {
      return (
        <Channel channel={channel}/>
      )
    })

    return (
      <div>
        {channelNodes}
      </div>
    )
  }
}

export default ChannelList