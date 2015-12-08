import alt from '../alt'
import Actions from '../actions'
import {decorate, bind, datasource} from 'alt/utils/decorators'
import ChannelSource from '../sources/ChannelSource'
import MessagesSource from '../sources/MessagesSource'
import _ from 'lodash'

@datasource(ChannelSource, MessagesSource)
@decorate(alt)
class ChatStore {
  constructor() {
    this.state = {
      user: null,
      messages: null,
      messagesLoading: true
    }
  }

  @bind(Actions.messagesLoading)
  messagesLoading(){
    this.setState({
      messagesLoading: true
    })
  }


  @bind(Actions.channelSelected)
  channelSelected(selectedChannel) {
    _(this.state.channels)
      .values()
      .each(channel => channel.selected = false)
      .value()

    selectedChannel.selected = true

    this.setState({
      channels: this.state.channels,
      selectedChannel
    })

    setTimeout(this.getInstance().getMessages, 100)
  }

  @bind(Actions.messagesReceived)
  receivedMessages(messages) {
    _(messages)
      .keys()
      .each(key => {
        messages[key].key = key
      })
      .value()

    this.setState({
      messages,
      messagesLoading: false
    })
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel

    _(channels)
      .keys()
      .each((key, index) => {
        channels[key].key = key
        if (index === 0) {
          channels[key].selected = true
          selectedChannel = channels[key]
        }
      })
      .value()

    this.setState({
      channels,
      selectedChannel
    })

    setTimeout(this.getInstance().getMessages, 100)
  }


  @bind(Actions.login)
  login(user) {
    this.setState({user})
  }
}

export default alt.createStore(ChatStore)