import React from 'react'
import {Card} from 'material-ui'
import Channel from './Channel'

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [
        'channel1',
        'channel2',
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
      <Card style={{flexGrow: 1, padding: 30}}>
        {channelNodes}
      </Card>
    )
  }
}

export default ChannelList