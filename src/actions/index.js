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

  login(history) {
    return (dispatch) => {
      let firebaseDbRef = new Firebase('https://vivid-heat-1488.firebaseio.com')

      firebaseDbRef.authWithOAuthPopup('facebook', (err, user) => {
        if (err) {
          return
        }

        dispatch(user)
        history.pushState(null, '/chat')
      })
    }
  }
}

export default alt.createActions(Actions)