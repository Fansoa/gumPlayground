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

document.querySelector("#share").addEventListener('click', e => getMicAndCamera(e))