const localStore = {
  set: (key, val) => {
    if (typeof (val) === 'object') {
      val = JSON.stringify(val)
    }
    localStorage.setItem(key, val)
  },
  get: (key, t) => {
    let val = localStorage.getItem(key)
    if (!t) {
      val = JSON.parse(val)
    }
    return val
  },
  getText: (key) => {
    return localStorage.getItem(key) || ''
  },
  getJson: (key) => {
    let val = localStorage.getItem(key)
    val = JSON.parse(val)
    return val
  },
  remove: (key) => {
    localStorage.removeItem(key)
  }
}

export default localStore
