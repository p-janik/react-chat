import React from 'react'
import mui from 'material-ui'
import Actions from '../../actions'

let {ListItem} = mui

class Channel extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    Actions.channelSelected(this.props.channel)
  }

  render() {
    return (
      <ListItem onClick={this.onClick}>
        {this.props.channel.name}
      </ListItem>
    )
  }
}

export default Channel