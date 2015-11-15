import React from 'react'
import {Card} from 'material-ui'
import trim from 'trim'
import Firebase from 'firebase'

class MessageBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)

    this.messagesDbRef = new Firebase('https://vivid-heat-1488.firebaseio.com/messages')
  }

  onChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  onKeyUp(event) {
    if (event.keyCode === 13 && trim(event.target.value) !== '') {
      event.preventDefault()
      let {message} = this.state
      this.setState({
        message: ''
      })

      this.messagesDbRef.push({message})
    }
  }

  render() {
    let styles = {
      textArea: {
        width: '100%',
        borderColor: '#D0D0D0',
        resize: 'none',
        borderRadius: 3,
        minHeight: 50,
        color: '#555',
        fontSize: 15,
        outline: 'auto 0px'
      },
      card: {
        maxWidth: 1200,
        padding: 30,
        margin: '30px auto'
      }
    }

    return (
      <Card style={styles.card}>
        <textarea
          value={this.state.message}
          style={styles.textArea}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}/>
      </Card>
    )
  }
}

export default MessageBox