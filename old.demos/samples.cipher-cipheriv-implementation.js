// // const crypto = require('crypto');
// // const algorithm = 'aes-256-cbc';
// // const key = crypto.randomBytes(32);
// // const iv = crypto.randomBytes(16);

// // function encrypt(text) {
// //  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
// //  let encrypted = cipher.update(text);
// //  encrypted = Buffer.concat([encrypted, cipher.final()]);
// //  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
// // }

// // function decrypt(text) {
// //  let iv = Buffer.from(text.iv, 'hex');
// //  let encryptedText = Buffer.from(text.encryptedData, 'hex');
// //  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
// //  let decrypted = decipher.update(encryptedText);
// //  decrypted = Buffer.concat([decrypted, decipher.final()]);
// //  return decrypted.toString();
// // }

// // var hw = encrypt("Some serious stuff")
// // console.log(hw)
// // console.log(decrypt(hw))

// var crypto = require('crypto');
// var assert = require('assert');

// var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
// var key = 'password';
// var text = 'I love kittens';

// var cipher = crypto.createCipher(algorithm, key);  
// var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
// var decipher = crypto.createDecipher(algorithm, key);
// var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');


// assert.equal(decrypted, text);
// console.log(decrypted, text, encrypted);

// https://stackoverflow.com/questions/6953286/how-to-encrypt-data-that-needs-to-be-decrypted-in-node-js

const crypto = require('crypto');

var exports = module.exports = {};

const ALGORITHM = {

  /**
   * GCM is an authenticated encryption mode that
   * not only provides confidentiality but also 
   * provides integrity in a secured way
   * */
  BLOCK_CIPHER: 'aes-256-gcm',

  /**
   * 128 bit auth tag is recommended for GCM
   */
  AUTH_TAG_BYTE_LEN: 16,

  /**
   * NIST recommends 96 bits or 12 bytes IV for GCM
   * to promote interoperability, efficiency, and
   * simplicity of design
   */
  IV_BYTE_LEN: 12,

  /**
   * Note: 256 (in algorithm name) is key size. 
   * Block size for AES is always 128
   */
  KEY_BYTE_LEN: 32,

  /**
   * To prevent rainbow table attacks
   * */
  SALT_BYTE_LEN: 16
}

const getIV = () => crypto.randomBytes(ALGORITHM.IV_BYTE_LEN);
exports.getRandomKey = getRandomKey = () => crypto.randomBytes(ALGORITHM.KEY_BYTE_LEN);

/**
 * To prevent rainbow table attacks
 * */
exports.getSalt = getSalt = () => crypto.randomBytes(ALGORITHM.SALT_BYTE_LEN);

/**
 * 
 * @param {Buffer} password - The password to be used for generating key
 * 
 * To be used when key needs to be generated based on password.
 * The caller of this function has the responsibility to clear 
 * the Buffer after the key generation to prevent the password 
 * from lingering in the memory
 */
exports.getKeyFromPassword = getKeyFromPassword = (password, salt) => {
  return crypto.scryptSync(password, salt, ALGORITHM.KEY_BYTE_LEN);
}

/**
 * 
 * @param {Buffer} messagetext - The clear text message to be encrypted
 * @param {Buffer} key - The key to be used for encryption
 * 
 * The caller of this function has the responsibility to clear 
 * the Buffer after the encryption to prevent the message text 
 * and the key from lingering in the memory
 */
exports.encrypt = encrypt = (messagetext, key) => {
  const iv = getIV();
  const cipher = crypto.createCipheriv(
    ALGORITHM.BLOCK_CIPHER, key, iv,
    { 'authTagLength': ALGORITHM.AUTH_TAG_BYTE_LEN });
  let encryptedMessage = cipher.update(messagetext);
  encryptedMessage = Buffer.concat([encryptedMessage, cipher.final()]);
  return Buffer.concat([iv, encryptedMessage, cipher.getAuthTag()]);
}

/**
 * 
 * @param {Buffer} ciphertext - Cipher text
 * @param {Buffer} key - The key to be used for decryption
 * 
 * The caller of this function has the responsibility to clear 
 * the Buffer after the decryption to prevent the message text 
 * and the key from lingering in the memory
 */
exports.decrypt = decrypt = (ciphertext, key) => {
  const authTag = ciphertext.slice(-16);
  const iv = ciphertext.slice(0, 12);
  const encryptedMessage = ciphertext.slice(12, -16);
  const decipher = crypto.createDecipheriv(
    ALGORITHM.BLOCK_CIPHER, key, iv,
    { 'authTagLength': ALGORITHM.AUTH_TAG_BYTE_LEN });
  decipher.setAuthTag(authTag);
  let messagetext = decipher.update(encryptedMessage);
  messagetext = Buffer.concat([messagetext, decipher.final()]);
  return messagetext;
}

let plaintext = 'my message text';
let key = getRandomKey();
let ciphertext = encrypt(plaintext, key);
let decryptOutput = decrypt(ciphertext, key).toString("utf8");
console.log(plaintext, ciphertext, new Buffer(ciphertext.toString("utf8"), "utf8"), ciphertext.toString("utf8"), decryptOutput);
