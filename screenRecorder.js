let recordedBlobs;
let mediaRecorder;

function startRecording() {
  console.log("start recording");
  mediaRecorder = new MediaRecorder(stream)
  recordedBlobs = []
  mediaRecorder.ondataavailable = e => {
    console.log("🚀 ~ startRecording ~ e:", e)
    recordedBlobs.push(e.data)
    console.log("Data is available for the media recorder")
  }
  mediaRecorder.start()
}

function stopRecording() {
  mediaRecorder.stop()
  console.log("stop recorder");
}

function playRecording() {
  console.log("play recording");
  console.log(recordedBlobs)
  const superBuffer = new Blob(recordedBlobs)
  const recordVideoEl = document.querySelector("#other-video")
  recordVideoEl.src = window.URL.createObjectURL(superBuffer)
  recordVideoEl.controls = true
  recordVideoEl.play()
}