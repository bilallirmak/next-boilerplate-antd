import DeviceInfo from 'react-native-device-info'

export const getUniqueDeviceId = () => {
  return DeviceInfo.getUniqueId()
}

export const getUserAgent = async () => {
  const systemName = await DeviceInfo.getSystemName()
  const systemVersion = await DeviceInfo.getSystemVersion()
  const agentFull = await DeviceInfo.getUserAgent()
  const browser = agentFull.split('(')[0].split('/')
  let agent
  if (browser.length === 2) {
    agent = `${
      browser[0]
    } V${browser[1].trim()}(${systemName} V${systemVersion})`
    return agent
  } else {
    return agentFull
  }
}
