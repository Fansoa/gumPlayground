async function shareScreen() {
  const options = {
    video: true,
    audio: true,
    surfaceSwitching: 'include'
  }

  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
    const recordVideoEl = document.querySelector("#other-video")
    recordVideoEl.srcObject = mediaStream
  } catch (error) {
    console.error("🚀 ~ shareScreen ~ error:", error)
  }

  changeButtons(['green', 'green', 'blue', 'blue', 'green', 'green', 'green', 'green'])
}