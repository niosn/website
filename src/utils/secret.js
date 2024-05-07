const CryptoJS = require('crypto-js')
const key = CryptoJS.enc.Utf8.parse('47247C29E32B4C00') // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('769cf1e3b01ca800') // 十六位十六进制数作为密钥偏移量

// 解密方法
export function Decrypt(word) {
  if (!word) return word
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

// 加密方法
export function Encrypt(word) {
  if (!word) return word
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.ciphertext.toString().toUpperCase()
}

export function envDecrypt(word) {
  // if (process.env.ENV_CONFIG === 'dev') return word
  // return Decrypt(word)
  return word
}

export function envEncrypt(word) {
  // if (process.env.ENV_CONFIG === 'dev') return word
  // return Encrypt(word)
  return word
}
