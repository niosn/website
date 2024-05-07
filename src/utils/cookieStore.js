import Cookies from 'js-cookie'

const cookieStore = {
  set: (key, val, parm) => {
    if (typeof (val) === 'object') {
      val = JSON.stringify(val)
    }
    Cookies.set(key, val, parm)
  },
  get: (key, t) => {
    let val = Cookies.get(key)
    if (!t && val) {
      val = JSON.parse(val)
    }
    return val
  }
}

export default cookieStore

