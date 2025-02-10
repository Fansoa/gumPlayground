function changeVideoSize() {
  const videoTrack = stream.getVideoTracks()[0]
  const videoTrackCapabilities = videoTrack.getCapabilities()
  
  const inputWidth = document.querySelector('#vid-width').value
  const inputHeight = document.querySelector('#vid-height').value
  
  const videoTrackWidth = inputWidth > videoTrackCapabilities.width.max ? videoTrackCapabilities.width.max : inputWidth;
  const videoTrackHeight = inputHeight > videoTrackCapabilities.height.max ? videoTrackCapabilities.height.max : inputHeight;

  videoTrack.applyConstraints({
    width: videoTrackWidth,
    height: videoTrackHeight
  })
}

document.querySelector('#change-size').addEventListener('click', e => changeVideoSize(e))
