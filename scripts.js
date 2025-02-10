console.log('Scripts file works !')

const constraints = {
    video: true,
    audio: true
}

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

