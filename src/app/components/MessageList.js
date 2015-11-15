import React from 'react'
import {Card} from 'material-ui'
import Message from './Message'
import Firebase from 'firebase'
import _ from 'lodash'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {}
    }

    this.messagesDbRef = new Firebase('https://vivid-heat-1488.firebaseio.com/messages')
    this.messagesDbRef.on('child_added', snap => {
      let messageKey = snap.key()

      if (this.state.messages[messageKey])
        return

      let {messages} = this.state
      let messageVal = snap.val()

      messages[messageKey] = messageVal
      this.setState({messages})
    })
  }

  render() {
    let messageNodes = _.values(this.state.messages).map((message, index) => {
      return (
        <Message message={message} key={index}/>
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