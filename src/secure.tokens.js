/**
 *
 * Package: hasher-apis
 * Author: Ganesh B
 * Description:
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: src/base.js
 * File Description:
 *
 * PKCS: https://stackoverflow.com/questions/5866129/rsa-encryption-problem-size-of-payload-data/5868456#5868456
 * OAEP: https://crypto.stackexchange.com/questions/42097/what-is-the-maximum-size-of-the-plaintext-message-for-rsa-oaep/42100#42100
 *
*/

/* eslint no-console: 0 */

'use strict'


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
  let rd;
  if (typeof self !== 'undefined' && (self.crypto || self.msCrypto)) { rd = randomBytes } else { rd = crypto.randomBytes }
  const jwtSecret = rd(Math.ceil(JWT_SECRET_LENGTH / 2))
    .toString('hex') // convert to hexadecimal format
    .slice(0, JWT_SECRET_LENGTH); // return required number of characters

  return jwtSecret;
}

/**
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
  let rd;
  if (typeof self !== 'undefined' && (self.crypto || self.msCrypto)) { rd = randomBytes } else { rd = crypto.randomBytes }
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


module.exports.generateJwtSecret = generateJwtSecret;
module.exports.nonce = nonce;
module.exports.randomString = randomString;
module.exports.default = {
  generateJwtSecret,
  nonce,
  randomString
}

