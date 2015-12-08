import React from 'react'
import mui from 'material-ui'

let {Avatar, ListItem} = mui

const styles = {
  date: {
    fontSize: '0.8em',
    color: 'gray',
    marginRight: 10
  },
  author: {
    fontWeight: 'bold'
  }
}

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let message = this.props.message
    let avatar = <Avatar src={`${message.profileImageURL}`}/>

    return (
      <ListItem
        leftAvatar={avatar}>
        <span style={styles.date}>{new Date(message.date).toLocaleString().slice(10)}</span>
        <span style={styles.author}>{message.author}</span>: {message.message}
      </ListItem>
    )
  }
}

export default Message