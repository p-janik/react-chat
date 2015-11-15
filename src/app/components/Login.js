import React from 'react'
import mui from 'material-ui'
import Actions from '../../actions'

let {
  Card,
  CardText,
  RaisedButton
  } = mui

class Login extends React.Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    Actions.login()
  }

  render() {
    return (
      <Card style={{
      maxWidth:'800px',
      margin: '30px auto',
      padding: '50px'}}>
        <CardText style={{textAlign: 'center'}}>
          Please log in
        </CardText>

        <RaisedButton style={{display: 'block'}}
        onClick={this.onClick}>
          Log in
        </RaisedButton>
      </Card>
    )
  }
}

export default Login