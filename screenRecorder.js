let recordedBlobs;
let mediaRecorder;

function startRecording() {
  if (!stream) {
    alert("No current feed")
    return
  }
  console.log("start recording");
  mediaRecorder = new MediaRecorder(stream)
  recordedBlobs = []
  mediaRecorder.ondataavailable = e => {
    console.log("Data is available for the media recorder")
    recordedBlobs.push(e.data)
  }
  mediaRecorder.start()
  changeButtons(['green', 'green', 'blue', 'blue', 'green', 'blue', 'grey', 'blue'])
}

function stopRecording() {
  if (!mediaRecorder) {
    alert("Please record before stopping!")
    return
  }
  mediaRecorder.stop()
  console.log("stop recorder");
  changeButtons(['green', 'green', 'blue', 'blue', 'green', 'green', 'blue', 'blue'])
}

function playRecording() {
  if (!recordedBlobs) {
    alert("No recording saved")
    return
  }
  console.log("play recording");
  console.log(recordedBlobs)
  const superBuffer = new Blob(recordedBlobs)
  const recordVideoEl = document.querySelector("#other-video")
  recordVideoEl.src = window.URL.createObjectURL(superBuffer)
  recordVideoEl.controls = true
  recordVideoEl.play()
  changeButtons(['green', 'green', 'blue', 'blue', 'green', 'green', 'green', 'blue'])
}