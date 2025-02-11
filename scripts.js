console.log('Scripts file works !')

const constraints = {
    video: true,
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      // autoGainControl: false // Testez en désactivant l'auto-gain
  }
}

let mediaStream = null;
let stream = null;

async function getMicAndCamera(e) {
    try {
      /* use the stream */
      stream = await navigator.mediaDevices.getUserMedia(constraints);

      changeButtons(['green', 'blue', 'blue', 'grey', 'grey', 'grey', 'grey', 'grey'])
      
    } catch (err) {
      /* handle the error */
    }
}

function showMyFeed() {
  if (!stream) {
    alert('Stream still loading...')
    return
  }
  document.querySelector("#my-video").srcObject = stream
  changeButtons(['green', 'green', 'blue', 'blue', 'blue', 'grey', 'grey', 'blue'])
}

function stopMyFeed() {
  if (!stream) {
    alert('Stream still loading...')
    return
  }
  const tracks = stream.getTracks()
  tracks.forEach(track => {
    track.stop();
  });
  changeButtons(['blue', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey'])
} 

document.querySelector("#share").addEventListener('click', e => getMicAndCamera(e))
document.querySelector("#show-video").addEventListener('click', e => showMyFeed(e))
document.querySelector("#stop-video").addEventListener('click', e => stopMyFeed(e))
document.querySelector('#change-size').addEventListener('click', e => changeVideoSize(e))
document.querySelector('#start-record').addEventListener('click', e => startRecording(e))
document.querySelector('#stop-record').addEventListener('click', e => stopRecording(e))
document.querySelector('#play-record').addEventListener('click', e => playRecording(e))
document.querySelector('#share-screen').addEventListener('click', e => shareScreen(e))