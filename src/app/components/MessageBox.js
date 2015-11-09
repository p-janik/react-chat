import React from 'react'
import {Card} from 'material-ui'

class MessageBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Card style={{maxWidth: 1200, padding: 30, margin: '30px auto'}}>
        <textarea style={{width: '100%'}}/>
      </Card>
    )
  }
}

export default MessageBox