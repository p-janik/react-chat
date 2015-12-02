import Actions from '../actions'
import Firebase from 'Firebase'

let firebaseRef = new Firebase('https://vivid-heat-1488.firebaseio.com/channels')

let ChannelSource = {
  getChannels: {
    remote(state){
      return new Promise((resolve, reject) => {
        firebaseRef.once('value', snap => {
          let channels = snap.val()
          resolve(channels)
        })
      })
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource