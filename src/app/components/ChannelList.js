import React from 'react'
import mui from 'material-ui'
import Channel from './Channel'
import connectToStores from 'alt-utils/lib/connectToStores'
import ChatStore from '../../stores/ChatStore'

let {Card, CircularProgress} = mui

@connectToStores
class ChannelList extends React.Component {
  constructor(props) {
    super(props)

    ChatStore.getChannels()
  }

  static getStores() {
    return [ChatStore]
  }

  static getPropsFromStores() {
    return ChatStore.getState()
  }

  render() {
    if (!this.props.channels) {
      return (
        <Card style={{flexGrow: 1}}>
          <CircularProgress
            mode="indeterminate"
            style={{
            paddingTop: 20,
            paddingBottom: 20,
            margin: '0 auto',
            display: 'block',
            width: '60px'
          }}/>
        </Card>
      )
    }

    let channelNodes = _(this.props.channels)
      .keys()
      .map((k) => {
        let channel = this.props.channels[k]
        return (<Channel channel={channel} key={k}/>)
      })
      .value()

    return (
      <Card style={{flexGrow: 1, padding: 30}}>
        {channelNodes}
      </Card>
    )
  }
}

export default ChannelList