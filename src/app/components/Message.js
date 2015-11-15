import React from 'react'
import mui from 'material-ui'

let {Avatar, ListItem} = mui

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let avatar = <Avatar src="https://scontent.fwaw3-1.fna.fbcdn.net/hprofile-xpa1/v/t1.0-1/p320x320/11665591_1257666244259531_2833041217610762297_n.jpg?oh=1814d6a4c072e93573e0f61255f7b841&oe=56EFDED3"/>

    return (
      <ListItem
        leftAvatar={avatar}>
        {this.props.message.message}
      </ListItem>
    )
  }
}

export default Message