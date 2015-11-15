import React from 'react'
import mui from 'material-ui'

let {ListItem} = mui

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ListItem>
        {this.props.channel}
      </ListItem>
    )
  }
}

export default Channel