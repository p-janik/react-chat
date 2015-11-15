import React from 'react'
import {Card} from 'material-ui'
import Message from './Message'
import Firebase from 'firebase'
import _ from 'lodash'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }

    this.messagesDbRef = new Firebase('https://vivid-heat-1488.firebaseio.com/messages')
    this.messagesDbRef.once('value', snap => {
      let messagesVal = snap.val()
      let messages = _(messagesVal)
        .keys()
        .map(key => messagesVal[key])
        .value()

      this.setState({messages})
    })
  }

  render() {
    let messageNodes = this.state.messages.map((message, index) => {
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