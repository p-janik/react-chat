import React from 'react'
import {Card} from 'material-ui'
import Message from './Message'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        'message1',
        'message2',
        'message3'
      ]
    }
  }

  render() {
    let messageNodes = this.state.messages.map(message => {
      return (
        <Message message={message}/>
      )
    })

    return (
      <Card style={{flexGrow: 4, marginLeft: 30, padding: 30}}>
        {messageNodes}
      </Card>
    )
  }
}

export default MessageList