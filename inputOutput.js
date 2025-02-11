const audioInputEl = document.querySelector('#audio-input')
const audioOutputEl = document.querySelector('#audio-output')
const videoInputEl = document.querySelector('#video-input')


async function getDevices() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices()
    devices.forEach(device => {
      const option = document.createElement('option')
      option.value = device.deviceId
      option.text = device.label
      if (device.kind === "audioinput") {
        audioInputEl.append(option)
      } else if (device.kind === "audiooutput") {
        audioOutputEl.append(option)
      } else if (device.kind === "videoinput") {
        videoInputEl.append(option)
      }
    })
      
    return devices
  } catch (error) {
    console.error("🚀 ~ getDevices ~ error:", error)
  }
}

async function changeAudioInput(e) {
  const deviceId = e.target.value
  const newConstraints = {
    audio: { deviceId: { exact: deviceId } },
    video: true
  }

  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints)
  } catch (error) {
    console.error("🚀 ~ changeVideo ~ error:", error)
  }

}

async function changeAudioOutput(e) {
  await videoEl.setSinkId(e.target.value)
}

async function changeVideo(e) {
  console.log("🚀 ~ changeVideo ~ e:", e)
  const deviceId = e.target.value
  const newConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } }
  }

  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints)
  } catch (error) {
    console.error("🚀 ~ changeVideo ~ error:", error)
  }

}
