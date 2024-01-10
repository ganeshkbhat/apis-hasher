/**
 *
 * Package: hasher-apis
 * Author: Ganesh B
 * Description:
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: content.js
 * File Description:
 *
 * PKCS: https://stackoverflow.com/questions/5866129/rsa-encryption-problem-size-of-payload-data/5868456#5868456
 * OAEP: https://crypto.stackexchange.com/questions/42097/what-is-the-maximum-size-of-the-plaintext-message-for-rsa-oaep/42100#42100
 *
*/

/* eslint no-console: 0 */

'use strict'

const fs = require('fs')
const path = require('path')
const { getConstants, getSymbolsList } = require('./consts.js')

/**
 *
 * reference: https://attacomsian.com/blog/nodejs-encrypt-decrypt-data
 *
 * @param {*} data
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
module.exports.encrypt = function encryptContent (data, salt, algorithm = 'aes-256-ctr', keyAlgorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  const crypto = require('crypto')

  const hashesList = crypto.getHashes()
  const ciphersList = crypto.getCiphers()
  if (!hashesList.includes(keyAlgorithm)) throw new Error('[hashContent] Hashes Algorithm not in list of included hashes ' + JSON.stringify(hashesList))
  if (!ciphersList.includes(algorithm)) throw new Error('[hashContent] Ciphers Algorithm not in list of included ciphers ' + JSON.stringify(ciphersList))

  const iv = crypto.randomBytes(16)
  const key = crypto.createHash(keyAlgorithm).update(JSON.stringify(salt)).digest(digest)
  const key_in_bytes = Buffer.from(key, digest)

  const cipher = crypto.createCipheriv(algorithm, key_in_bytes, iv)
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()])

  return {
    iv: iv.toString(digest),
    content: encrypted.toString(digest)
  }
}

/**
 *
 *
 * @param {*} encryptedData
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
module.exports.decrypt = function decryptContent (encryptedData, salt, algorithm = 'aes-256-ctr', keyAlgorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  const crypto = require('crypto')

  const hashesList = crypto.getHashes()
  const ciphersList = crypto.getCiphers()
  if (!hashesList.includes(keyAlgorithm)) throw new Error('[dehashContent] Hashes Algorithm not in list of included hashes ' + JSON.stringify(hashesList))
  if (!ciphersList.includes(algorithm)) throw new Error('[dehashContent] Ciphers Algorithm not in list of included ciphers ' + JSON.stringify(ciphersList))

  const key = crypto.createHash(keyAlgorithm).update(JSON.stringify(salt)).digest(digest)
  const key_in_bytes = Buffer.from(key, digest)

  const decipher = crypto.createDecipheriv(algorithm, key_in_bytes, Buffer.from(encryptedData.iv, digest))
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(encryptedData.content, digest)), decipher.final()])
  return decrpyted.toString()
}

/**
 *
 *
 * @param {*} data
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 * @return {*}
 */
module.exports.encryptEncodeWithCipheriv = function encryptEncodeWithCipheriv (data, salt, algorithm = 'aes-256-ctr', keyAlgorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  const encrypted = ecrypt(data, salt, algorithm, keyAlgorithm, digest, options)
  return atob(JSON.stringify(encrypted))
}

/**
 *
 *
 * @param {*} encryptedData
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 * @return {*}
 */
module.exports.decryptDecodeWithCipheriv = function decryptDecodeWithCipheriv (encryptedData, salt, algorithm = 'aes-256-ctr', keyAlgorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  const decrypted = JSON.parse(btoa(encryptedData))
  return decrypt(decrypted, salt, algorithm, keyAlgorithm, digest, options)
}

/**
 *
 *
 * @param {*} [options] < { [publicKey | publicKeyPath], padding, algorithm ) } >
 * @return {*}
 */
module.exports.encryptWithKey = function encryptWithKey (data, options = {}) {
  const crypto = require('crypto')
  return crypto.publicEncrypt({
    key: (options.publicKey) ? options.publicKey : (options.publicKeyPath) ? fs.readFileSync(options.publicKeyPath) : null,
    padding: getConstants('RSA_PKCS1_PADDING'),
    oaepHash: options.algorithm
  },
  Buffer.from(data)
  ).toString(options.digest || 'base64')
}

/**
 *
 *
 * @param {*} encryptedData
 * @param {*} [options] < { [privateKey | privateKeyPath], padding, algorithm ) } >
 * @return {*}
 */
module.exports.decryptWithKey = function decryptWithKey (encryptedData, options = {}) {
  const crypto = require('crypto')
  return crypto.privateDecrypt({
    key: (options.privateKey) ? options.privateKey : (options.privateKeyPath) ? fs.readFileSync(options.privateKeyPath) : null,
    padding: options.padding || getConstants('RSA_PKCS1_PADDING'),
    oaepHash: options.algorithm
  },
  Buffer.from(encryptedData, options.digest || 'base64')
  ).toString(options.encoding || 'utf-8')
}

/**
 *
 *
 * @param {*} data
 * @param {*} salt
 * @return {*}
 */
module.exports.encryptWithCipheriv = function encryptCipheriv (data, salt) {
  const iv = getIV()
  const cipher = crypto.createCipheriv(
    ALGORITHM.BLOCK_CIPHER, key, iv,
    { authTagLength: ALGORITHM.AUTH_TAG_BYTE_LEN })
  let encryptedMessage = cipher.update(messagetext)
  encryptedMessage = Buffer.concat([encryptedMessage, cipher.final()])
  return Buffer.concat([iv, encryptedMessage, cipher.getAuthTag()])
}

/**
 *
 *
 * @param {*} encryptedData
 * @param {*} salt
 * @param {*} iv
 * @return {*}
 */
module.exports.decryptWithCipheriv = function decryptCipheriv (encryptedData, salt) {
  const authTag = ciphertext.slice(-16)
  const iv = ciphertext.slice(0, 12)
  const encryptedMessage = ciphertext.slice(12, -16)
  const decipher = crypto.createDecipheriv(
    ALGORITHM.BLOCK_CIPHER, key, iv,
    { authTagLength: ALGORITHM.AUTH_TAG_BYTE_LEN })
  decipher.setAuthTag(authTag)
  let messagetext = decipher.update(encryptedMessage)
  messagetext = Buffer.concat([messagetext, decipher.final()])
  return messagetext
}

/**
 *
 *
 * @class Encrypter
 */
class Encrypter {
  // // USAGE:
  // const encrypter = new Encrypter("secret");
  // const clearText = "adventure time";
  // const encrypted = encrypter.encrypt(clearText);
  // const dencrypted = encrypter.dencrypt(encrypted);
  // console.log({ worked: clearText === dencrypted });

  constructor (encryptionKey) {
    this.algorithm = 'aes-192-cbc'
    this.key = encryptionKey ? crypto.scryptSync(encryptionKey, 'salt', 24) : null
  }

  /**
     *
     *
     * @param {*} clearText
     * @param {*} key
     * @param {boolean} [set=false]
     * @return {*}
     * @memberof Encrypter
     */
  encrypt (clearText, key, set = false) {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(this.algorithm, key || this.key, iv)
    const encrypted = cipher.update(clearText, 'utf8', 'hex')
    if (set) { this.key = key }
    return [
      encrypted + cipher.final('hex'),
      Buffer.from(iv).toString('hex')
    ].join('|')
  }

  /**
     *
     *
     * @param {*} encryptedText
     * @param {*} key
     * @param {boolean} [set=false]
     * @return {*}
     * @memberof Encrypter
     */
  decrypt (encryptedText, key, set = false) {
    const [encrypted, iv] = encryptedText.split('|')
    if (!iv) throw new Error('IV not found')
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      key || this.key,
      Buffer.from(iv, 'hex')
    )
    if (set) { this.key = key }
    return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8')
  }
}

module.exports.Encrypter = Encrypter

module.exports.default = {
  encrypt,
  decrypt,
  encryptEncodeWithCipheriv,
  decryptDecodeWithCipheriv,
  encryptWithKey,
  decryptWithKey,
  Encrypter,
  // // encryptWithCipher,
  // // decryptWithCipher,
  // encryptWithCipherivJoins,
  // decryptWithCipherivJoins,
  encryptWithCipheriv,
  decryptWithCipheriv
}
