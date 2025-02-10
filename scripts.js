console.log('Scripts file works !')

const constraints = {
    video: true,
    audio: true
}

let stream = null;

async function getMicAndCamera(e) {
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      /* use the stream */
      
    } catch (err) {
      /* handle the error */
    }
}

function showMyFeed() {
  document.querySelector("#my-video").srcObject = stream
}

document.querySelector("#share").addEventListener('click', e => getMicAndCamera(e))
document.querySelector("#show-video").addEventListener('click', e => showMyFeed(e))
