/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: hasher.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const path = require("path");
const _filelock = require("../index.js");
const expect = require('chai').expect;

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files - const.js', function () {

  it('[Test A] Test for ', function (done) {
      
      expect(fileHash).to.equal("hyBYClAC4C0Jw96vS3lQ+1yzw4wD4cUzQKWhgtBwgnc=");
      done();
  });

});


// const assert = require('assert');
// const cryptoUtils = require('../lib/crypto_utils');
// describe('CryptoUtils', function () {
//   describe('decrypt()', function () {
//     it('should return the same mesage text after decryption of text encrypted with a '
//       + 'randomly generated key', function () {
//         let plaintext = 'my message text';
//         let key = cryptoUtils.getRandomKey();
//         let ciphertext = cryptoUtils.encrypt(plaintext, key);

//         let decryptOutput = cryptoUtils.decrypt(ciphertext, key);

//         assert.equal(decryptOutput.toString('utf8'), plaintext);
//       });

//     it('should return the same mesage text after decryption of text excrypted with a '
//       + 'key generated from a password', function () {
//         let plaintext = 'my message text';
//         /**
//          * Ideally the password would be read from a file and will be in a Buffer
//          */
//         let key = cryptoUtils.getKeyFromPassword(
//           Buffer.from('mysecretpassword'), cryptoUtils.getSalt());
//         let ciphertext = cryptoUtils.encrypt(plaintext, key);

//         let decryptOutput = cryptoUtils.decrypt(ciphertext, key);

//         assert.equal(decryptOutput.toString('utf8'), plaintext);
//       });
//   });
// });

