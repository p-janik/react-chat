import React from 'react'
import Message from './Message'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        'message112',
        'message2sd',
        'message3123',
        'asdasd'
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
      <div>
        {messageNodes}
      </div>
    )
  }
}

export default MessageList