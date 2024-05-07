export function arzJsonp(callbackname, URL, callback, err) {
  window[callbackname] = callback
  var oscript = document.createElement('script')
  oscript.src = URL
  oscript.type = 'text/javascript'
  oscript.onerror = err
  document.head.appendChild(oscript)
  document.head.removeChild(oscript)
}

export function loadScript(url, func) {
  // var head = document.head || document.getElementByTagName('head')[0]
  var script = document.createElement('script')
  script.src = url

  script.onload = script.onreadystatechange = function() {
    if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
      debugger
      func()
      script.onload = script.onreadystatechange = null
    }
  }
  document.head.appendChild(script)
  document.head.removeChild(script)
  // head.insertBefore(script, 0)
}
export function proxyTest(url, func) {
  var ifr = document.createElement('iframe')
  var loadFunc = function() {
    debugger
    func(ifr.contentWindow.name)
    ifr.contentWindow.close()
    document.body.removeChild(ifr)
    ifr.src = ''
    ifr = null
  }

  ifr.src = url
  ifr.style.display = 'none'
  if (ifr.attachEvent) ifr.attachEvent('onload', loadFunc)
  else ifr.onload = loadFunc

  document.body.appendChild(ifr)
}
