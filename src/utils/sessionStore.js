import { envDecrypt, envEncrypt } from './secret'
const sessionStore = {
  set: (key, val) => {
    if (typeof (val) === 'object') {
      val = JSON.stringify(val)
    }
    val = envEncrypt(val)
    sessionStorage.setItem(key, val)
  },
  get: (key, t) => {
    let val = sessionStorage.getItem(key)
    val = envDecrypt(val)
    if (!t) {
      val = JSON.parse(val)
    }
    return val
  },
  getText: (key) => {
    let val = sessionStorage.getItem(key)
    val = envDecrypt(val)
    return val
  },
  getJson: (key) => {
    let val = sessionStorage.getItem(key)
    val = envDecrypt(val)
    if (val) {
      val = JSON.parse(val)
    }
    return val
  },
  remove: (key) => {
    sessionStorage.removeItem(key)
  }
}

export default sessionStore
