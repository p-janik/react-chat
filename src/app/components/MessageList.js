import React from 'react'
import {Card, CircularProgress} from 'material-ui'
import Message from './Message'
import Firebase from 'firebase'
import _ from 'lodash'
import ChatStore from '../../stores/ChatStore'
import connectToStores from 'alt-utils/lib/connectToStores'

@connectToStores
class MessageList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: {}
    }
  }

  static getStores() {
    return [ChatStore]
  }

  static getPropsFromStores() {
    return ChatStore.getState()
  }

  render() {
    let messageNodes = null

    if (!this.props.messagesLoading) {
      messageNodes = _.values(this.props.messages).map((message, index) => {
        return (
          <Message message={message} key={index}/>
        )
      })
    } else {
      let progressStyle = {
        padding: '20px 0',
        margin: '0 auto',
        display: 'block',
        width: 60
      }

      messageNodes = <CircularProgress mode="indeterminate" style={progressStyle}/>
    }

    return (
      <Card style={{flexGrow: 4, marginLeft: 30, padding: 30}}>
        {messageNodes}
      </Card>
    )
  }
}

export default MessageList