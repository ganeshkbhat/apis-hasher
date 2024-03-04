/**
 *
 * Package: hasher-apis
 * Author: Ganesh B
 * Description:
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: src/hasher.js
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
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}

/**
 * _verifySHAHash
 *
 * @param {*} data
 * @param {*} SHAHashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
module.exports.verify = module.exports.SHA = function verifySHA (data, SHAHashToCheck, algorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  const hashToCheck = SHAHashToCheck
  if (!hashToCheck) throw new Error('Hash to Check not provided')
  if (hashToCheck === createSHA(data, algorithm, digest, options)) return true
}

/**
 *
 * _verifyFileContentHash
 * rename compareContent
 *
 * @param {*} data
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
module.exports.contentWithChecksum = module.exports.contentChecksum = function compareContentChecksum (data, hashToCheck, algorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  if (!hashToCheck) throw new Error('Hash to Check not provided')
  const hashdata = hashContent(data, salt, algorithm, keyAlgorithm, digest, options)
  return verifySHA(createSHA(hashdata), createSHA(hashToCheck), algorithm, digest, options)
}

/**
 * _verifyFile
 *
 * @param {*} remotePath
 * @param {*} checksum
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [default: "base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
module.exports.checksum = module.exports.fileWithChecksum = function fileWithChecksum (remotePath, checksum, algorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  if (!hashToCheck) throw new Error('Hash to Check not provided')
  const hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : 'utf-8', flag: 'r' })
  return verifySHA(createSHA(hashdata), checksum, algorithm, digest, options)
}

/**
 * _verifyHashedFile, verifyHashedFile
 *
 * @param {*} remotePath
 * @param {*} hashToCheck Content Hashed Data [Check for direct checks checksum as well]
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
module.exports.fileWithContent = function fileWithContent (remotePath, hashToCheck, algorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  if (!hashToCheck) throw new Error('Hash to Check not provided')
  return fileWithChecksum(remotePath, createSHA(hashToCheck), algorithm, digest, options)
}

/**
 * _createSign
 *
 * @param {*} data
 * @param {*} algorithm [default: "SHA256"] [options: use function getHashes]
 * @param {*} base [default: "hex"] [options: ]
 * @param {*} keyGenType [default: "rsa"] [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} keyOptions [default: For createSign & publicEncrypt: { modulusLength: 2048 }]
 * @param {*} options [default: For createSign: { modulusLength: 2048 }, For publicEncrypt: { padding: crypto.constants.RSA_PKCS1_PSS_PADDING}]
 * @param {*} encryptType [default: "createSign"] [options: createSign, publicEncrypt]
 * @return {*}
 */
module.exports.createSign = function createSign (data, algorithm, base, keyGenType, keyOptions, options, encryptType, padding) {
  const crypto = require('crypto')

  algorithm = algorithm || 'sha256'
  base = base || 'hex'
  keyGenType = keyGenType || 'rsa'
  keyOptions = keyOptions || { modulusLength: 2048 }
  options = options || { modulusLength: 2048 }
  encryptType = encryptType || 'createSign'

  const { privateKey, publicKey } = _genKeyPair(keyGenType, keyOptions)

  let signature
  switch (encryptType) {
    case 'createSign':
      const sign = crypto.createSign(algorithm, options)
      sign.write(data)
      sign.end()
      signature = sign.sign(privateKey, base)
      break
    case 'publicEncrypt':
      options = {
        key: privateKey,
        padding: getConstants('RSA_PKCS1_PADDING'),
        ...options
      }
      signature = crypto.sign(algorithm, Buffer.from(data), options).toString(base)
      break
  }

  return { privateKey, publicKey, signature }
}

/**
 * _createSignVerify
 *
 * @param {*} data
 * @param {*} signature
 * @param {*} publicKey
 * @param {*} algorithm [default: "SHA256"] [options: use function getHashes]
 * @param {*} base [default: "hex"] [options: ]
 * @param {*} options [default: For createSign: { modulusLength: 2048 }, For publicEncrypt: { padding: crypto.constants.RSA_PKCS1_PSS_PADDING }]
 * @param {*} encryptType [default: "createSign"] [options: createSign, publicEncrypt]
 * @return {*}
 */
module.exports.createSignVerify = function createSignVerify (data, signature, publicKey, algorithm, base, options, encryptType) {
  const crypto = require('crypto')

  algorithm = algorithm || 'sha256'
  base = base || 'hex'
  options = options || { modulusLength: 2048 }
  encryptType = encryptType || 'createSign'

  switch (encryptType) {
    case 'createSign':
      const verify = crypto.createVerify(algorithm, { modulusLength: 2048, ...options })
      verify.write(data)
      verify.end()
      return verify.verify(publicKey, signature, base)
    case 'publicEncrypt':
      return crypto.verify(
        algorithm,
        Buffer.from(data),
        { key: publicKey, padding: getConstants('RSA_PKCS1_OAEP_PADDING'), ...options },
        Buffer.from(signature, base)
      )
  }
}

module.exports.default = {
  SHA: verifySHA,
  verify: verifySHA,
  contentChecksum: compareContentChecksum,
  compareContentChecksum,
  checksum: fileWithChecksum,
  fileWithChecksum,
  fileWithContent,
  createSign,
  createSignVerify
}
