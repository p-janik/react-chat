import Actions from '../actions'
import Firebase from 'Firebase'

let firebaseRef

let MessagesSource = {
  sendMessage: {
    remote(state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return resolve()
        }

        let {id, displayName, profileImageURL} = state.user.facebook

        firebaseRef.push({
          message: state.message,
          date: Firebase.ServerValue.TIMESTAMP,
          author: displayName,
          userId: id,
          profileImageURL
        })
      })
    },
    success: Actions.messageSendSuccess,
    error: Actions.messageSendError
  },

  getMessages: {
    remote(state){
      if (firebaseRef) {
        firebaseRef.off()
      }

      firebaseRef = new Firebase(`https://vivid-heat-1488.firebaseio.com/messages/${state.selectedChannel.name}`)

      return new Promise((resolve, reject) => {
        firebaseRef.once('value', snap => {
          let messages = snap.val()
          resolve(messages)

          firebaseRef.on('child_added', snap => {
            let message = snap.val()
            message.key = snap.key()

            Actions.messageReceived(message)
          })
        })
      })
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
}

export default MessagesSource