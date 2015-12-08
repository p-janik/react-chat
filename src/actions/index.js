import alt from '../alt'
import Firebase from 'firebase'

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelSelected',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    )
  }

  login(args) {
    return (dispatch) => {
      let firebaseDbRef = new Firebase('https://vivid-heat-1488.firebaseio.com')

      firebaseDbRef.authWithOAuthPopup('facebook', (err, user) => {
        if (err)
          return

        dispatch(user)
      })
    }
  }
}

export default alt.createActions(Actions)