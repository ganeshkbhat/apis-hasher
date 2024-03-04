/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/hasher-apis
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: index.js
 * File Description: 
 * 
 * https://github.com/vibornoff/webcrypto-shim/blob/master/webcrypto-shim.js
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

// Refs: https://github.com/auth0/auth0-spa-js/issues/113

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

var crypto;

if (!isBrowser()) { crypto = require("crypto"); } else { crypto = window.crypto; }

const GS2_HEADER = 'n,,'

const EQUAL_SIGN_REGEX = /=/g
const COMMA_SIGN_REGEX = /,/g

const URLSAFE_BASE64_PLUS_REGEX = /\+/g
const URLSAFE_BASE64_SLASH_REGEX = /\//g
const URLSAFE_BASE64_TRAILING_EQUAL_REGEX = /=+$/

const DIGESTS = {
  SHA256: {
    length: 32,
    type: 'sha256',
    minIterations: 4096,
  },
  SHA512: {
    length: 64,
    type: 'sha512',
    minIterations: 4096,
  },
}

/**
 * encode64
 *
 * @param {*} str
 */
const encode64 = str => Buffer.from(str).toString('base64')

/**
 * sanitizeString
 *
 * @param {*} str
 * @return {*} 
 */
function sanitizeString(str) {
  return str.replace(EQUAL_SIGN_REGEX, '=3D').replace(COMMA_SIGN_REGEX, '=2C')
}

/**
 * HMAC
 * 
 * DIGESTS => key => detailed structure => digestDefinition
 * 
 * @param {*} key
 * @param {*} data
 * @return {*} 
 */
function HMAC(key, data) {
  return crypto
    .createHmac(this.digestDefinition.type, key)
    .update(data)
    .digest()
}

/**
 * H
 *
 * @param {*} data
 * @return {*} 
 */
function H(data) {
  return crypto
    .createHash(this.digestDefinition.type)
    .update(data)
    .digest()
}

/**
 * Hi() is, essentially, PBKDF2 [RFC2898] with HMAC() as the
 * pseudorandom function (PRF) and with dkLen == output length of
 * HMAC() == output length of H()
 * 
 * DIGESTS => key => detailed structure => digestDefinition
 *
 * @returns {Promise<Buffer>}
 */
function hi(password, salt, iterations, digestDefinition) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
      salt,
      iterations,
      digestDefinition.length,
      digestDefinition.type,
      (err, derivedKey) => (err ? reject(err) : resolve(derivedKey))
    )
  })
}

/**
 * 
 * xor
 * 
 * Apply the exclusive-or operation to combine the octet string
 * on the left of this operator with the octet string on the right of
 * this operator.  The length of the output and each of the two
 * inputs will be the same for this use
 * 
 *
 * @returns {Buffer}
 */
function xor(left, right) {
  const bufferA = Buffer.from(left)
  const bufferB = Buffer.from(right)
  const length = Buffer.byteLength(bufferA)

  if (length !== Buffer.byteLength(bufferB)) {
    throw new Error('Buffers must be of the same length')
  }

  const result = []
  for (let i = 0; i < length; i++) {
    result.push(bufferA[i] ^ bufferB[i])
  }

  return Buffer.from(result)
}

/**
 * generateJwtSecret
 * 
 * https://github.com/GladysAssistant/Gladys/tree/5eb8e107d163b05ce29dc816488876d898c26c05/server/utils/jwtSecret.js#L5
 * https://github.com/tulios/kafkajs/tree/f7a166488321216a0feec4428f8e589b116eb31f/testHelpers/index.js#L26
 * 
 * @private
 * @description Generate a jwt secret.
 * @example
 * const jwtSecret = generateJwtSecret();
 * @returns {string} JwtSecret.
 */
function generateJwtSecret() {
  let rd = (typeof self !== 'undefined' && (self.crypto || self.msCrypto)) ? randomBytes : crypto.randomBytes;
  const jwtSecret = rd(Math.ceil(JWT_SECRET_LENGTH / 2))
    .toString('hex') // convert to hexadecimal format
    .slice(0, JWT_SECRET_LENGTH); // return required number of characters

  return jwtSecret;
}

/**
 * 
 * In cryptography, a nonce is an arbitrary number that can be used just once.
 * It is similar in spirit to a nonce * word, hence the name. It is often a random or pseudo-random
 * number issued in an authentication protocol to * ensure that old communications cannot be reused
 * in replay attacks.
 * 
 * https://github.com/tulios/kafkajs/tree/f7a166488321216a0feec4428f8e589b116eb31f/src/broker/saslAuthenticator/scram.js#L47
 *
 * @returns {String}
 */
function nonce() {
  let rd = (typeof self !== 'undefined' && (self.crypto || self.msCrypto)) ? randomBytes : crypto.randomBytes;
  return rd(16)
    .toString('base64')
    .replace(URLSAFE_BASE64_PLUS_REGEX, '-') // make it url safe
    .replace(URLSAFE_BASE64_SLASH_REGEX, '_')
    .replace(URLSAFE_BASE64_TRAILING_EQUAL_REGEX, '')
    .toString('ascii')
}

/**
 * randomString
 * 
 * // Returns a new random alphanumeric string of the given size.
 * // Note: to simplify implementation, the result has slight modulo bias,
 * // because chars length of 62 doesn't divide the number of all bytes
 * // (256) evenly. Such bias is acceptable for most cases when the output
 * // length is long enough and doesn't need to be uniform.
 * // https://www.tabnine.com/code/javascript/functions/crypto/randomBytes?snippet=5f67c3314b42a09e18720865
 *
 * @param {*} size
 * @return {*} 
 */
function randomString(size) {
  if (size === 0) {
    throw new Error('Zero-length randomString is useless.');
  }
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
  let objectId = '';
  const bytes = (0, crypto?.randomBytes || randomBytes)(size);
  for (let i = 0; i < bytes.length; ++i) {
    objectId += chars[bytes.readUInt8(i) % chars.length];
  }
  return objectId;
}

if (!isBrowser()) {
  module.exports.GS2_HEADER = GS2_HEADER;
  module.exports.EQUAL_SIGN_REGEX = EQUAL_SIGN_REGEX;
  module.exports.COMMA_SIGN_REGEX = COMMA_SIGN_REGEX;
  module.exports.URLSAFE_BASE64_PLUS_REGEX = URLSAFE_BASE64_PLUS_REGEX;
  module.exports.URLSAFE_BASE64_SLASH_REGEX = URLSAFE_BASE64_SLASH_REGEX;
  module.exports.URLSAFE_BASE64_TRAILING_EQUAL_REGEX = URLSAFE_BASE64_TRAILING_EQUAL_REGEX;
  module.exports.DIGESTS = DIGESTS;

  module.exports.sanitizeString = sanitizeString;
  module.exports.randomString = randomString;
  module.exports.generateJwtSecret = generateJwtSecret;
  module.exports.nonce = nonce;
  module.exports.xor = xor;
  module.exports.H = H;
  module.exports.hi = hi;
  module.exports.HMAC = HMAC;

  const defaults = {
    GS2_HEADER,
    EQUAL_SIGN_REGEX,
    COMMA_SIGN_REGEX,
    URLSAFE_BASE64_PLUS_REGEX,
    URLSAFE_BASE64_SLASH_REGEX,
    URLSAFE_BASE64_TRAILING_EQUAL_REGEX,
    DIGESTS,
    sanitizeString,
    randomString,
    generateJwtSecret,
    nonce,
    xor,
    H,
    hi,
    HMAC,
    generateJwtSecret,
    nonce,
    randomString
  }
  module.exports.default = defaults;
}
