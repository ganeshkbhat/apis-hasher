/**
 *
 * Package: hasher-apis
 * Author: Ganesh B
 * Description:
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: src/content.js
 * File Description:
 *
 * PKCS: https://stackoverflow.com/questions/5866129/rsa-encryption-problem-size-of-payload-data/5868456#5868456
 * OAEP: https://crypto.stackexchange.com/questions/42097/what-is-the-maximum-size-of-the-plaintext-message-for-rsa-oaep/42100#42100
 *
*/

/* eslint no-console: 0 */

'use strict';

const crypto = require('crypto');
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
module.exports.encrypt = function encryptContent(data, salt, algorithm = 'aes-256-ctr', keyAlgorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
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
module.exports.decrypt = function decryptContent(encryptedData, salt, algorithm = 'aes-256-ctr', keyAlgorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
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
module.exports.encryptEncodeWithCipheriv = function encryptEncodeWithCipheriv(data, salt, algorithm = 'aes-256-ctr', keyAlgorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
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
module.exports.decryptDecodeWithCipheriv = function decryptDecodeWithCipheriv(encryptedData, salt, algorithm = 'aes-256-ctr', keyAlgorithm = 'sha256', digest = 'base64', options = { logger: console.log }) {
  const decrypted = JSON.parse(btoa(encryptedData))
  return decrypt(decrypted, salt, algorithm, keyAlgorithm, digest, options)
}

/**
 *
 *
 * @param {*} [options] < { [publicKey | publicKeyPath], padding, algorithm ) } >
 * @return {*}
 */
module.exports.encryptWithKey = function encryptWithKey(data, options = {}) {
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
module.exports.decryptWithKey = function decryptWithKey(encryptedData, options = {}) {
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
module.exports.encryptWithCipheriv = function encryptCipheriv(data, salt) {
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
module.exports.decryptWithCipheriv = function decryptCipheriv(encryptedData, salt) {
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

  constructor(encryptionKey) {
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
  encrypt(clearText, key, set = false) {
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
  decrypt(encryptedText, key, set = false) {
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

class Crypter {
  // 
  // Code for aes-256-gcm from 
  // 
  // https://github.com/santoshshinde2012/node-boilerplate/blob/master/src/lib/crypto.ts
  // https://github.com/santoshshinde2012/node-boilerplate/blob/ba5013e13462423384af91d0c83f6e2abd4f055a/src/lib/crypto.ts
  // https://github.com/santoshshinde2012/node-boilerplate/blob/ba5013e13462423384af91d0c83f6e2abd4f055a/tests/unit-tests/lib/crypto.spec.ts
  // 

  // algorithm - AES 256 GCM Mode
  algorithm /* : crypto.CipherGCMTypes */ = 'aes-256-gcm';

  // iterations: It must be a number and should be set as high as possible.
  // So, the more is the number of iterations, the more secure the derived key will be,
  // but in that case it takes greater amount of time to complete.
  // number of interation - the value of 2145 is randomly chosen
  iterations = 2145;

  // keylen: It is the key of the required byte length and it is of type number.
  // derive encryption key: 32 byte key length
  keylen = 32;

  // digest: It is a digest algorithms of string type.
  digest = 'sha512';

  // random salt
  salt /* : Buffer */ = crypto.randomBytes(64);

  encrypt(data, secretKey) {
    // constant to encrypt the data
    const inputEncoding = 'utf8';
    const outputEncoding = 'base64';

    // random initialization vector
    const iv = crypto.randomBytes(12);

    // The method gives an asynchronous Password-Based Key Derivation
    const key /*: Buffer */ = crypto.pbkdf2Sync(
      secretKey,
      salt,
      iterations,
      keylen,
      digest,
    );

    // create a Cipher object, with the stated algorithm, key and initialization vector (iv).
    // @algorithm - AES 256 GCM Mode
    // @key
    // @iv
    // @options
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // create a Cipher object, with the stated algorithm, key and initialization vector (iv).
    // @algorithm - AES 256 GCM Mode
    // @key
    // @iv
    // @options
    const enc1 = cipher.update(data, inputEncoding);

    // Return the buffer containing the value of cipher object.
    // @outputEncoding: Output encoding format
    // const enc2 = cipher.final();
    const enc2 = cipher.final();

    // extract the auth tag
    const tag = cipher.getAuthTag();

    // concat the encrypted result with iv and tag
    const encryptedData = Buffer.concat([enc1, enc2, iv, tag]).toString(
      outputEncoding,
    );

    // return the result
    return encryptedData;
  }

  decrypt(data, secretKey) {
    // constant to decrypt the data
    const inputEncoding = 'base64';
    const outputEncoding = 'utf8';

    // Creates a new Buffer containing the given JavaScript string {str}
    // eslint-disable-next-line no-param-reassign
    const bufferData = Buffer.from(data, inputEncoding);

    // derive key using; 32 byte key length
    const key = crypto.pbkdf2Sync(
      secretKey,
      salt,
      iterations,
      keylen,
      digest,
    );

    // extract iv from encrypted data
    const iv = bufferData.subarray(
      bufferData.length - 28,
      bufferData.length - 16,
    );

    // extract tag from encrypted data
    const tag = bufferData.subarray(bufferData.length - 16);

    // extract encrypted text from encrypted data
    const text = bufferData.subarray(0, bufferData.length - 28);

    // AES 256 GCM Mode
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    // set the auth tag
    decipher.setAuthTag(tag);

    // Used to update the cipher with data according to the given encoding format.
    // @data: It is used to update the cipher by new content
    // @inputEncoding: Input encoding format
    // @outputEncoding: Output encoding format
    let str = decipher.update(text, null, outputEncoding);

    // Return the buffer containing the value of cipher object.
    // @outputEncoding: Output encoding format
    str += decipher.final(outputEncoding);

    // parse the string decrypted data
    return str;
  }

}

module.exports.AESCrypter = Crypter;

module.exports.default = {
  encrypt,
  decrypt,
  encryptEncodeWithCipheriv,
  decryptDecodeWithCipheriv,
  encryptWithKey,
  decryptWithKey,
  Encrypter,
  AESCrypter: Crypter,
  // // encryptWithCipher,
  // // decryptWithCipher,
  // encryptWithCipherivJoins,
  // decryptWithCipherivJoins,
  encryptWithCipheriv,
  decryptWithCipheriv
}
