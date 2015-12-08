import Actions from '../actions'
import Firebase from 'Firebase'

let firebaseRef

let MessagesSource = {
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
        })
      })
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
}

export default MessagesSource