

// https://stackoverflow.com/questions/6953286/how-to-encrypt-data-that-needs-to-be-decrypted-in-node-js

const assert = require('assert');
const cryptoUtils = require('../lib/crypto_utils');
describe('CryptoUtils', function() {
  describe('decrypt()', function() {
    it('should return the same mesage text after decryption of text encrypted with a '
     + 'randomly generated key', function() {
      let plaintext = 'my message text';
      let key = cryptoUtils.getRandomKey();
      let ciphertext = cryptoUtils.encrypt(plaintext, key);

      let decryptOutput = cryptoUtils.decrypt(ciphertext, key);

      assert.equal(decryptOutput.toString('utf8'), plaintext);
    });

    it('should return the same mesage text after decryption of text excrypted with a '
     + 'key generated from a password', function() {
      let plaintext = 'my message text';
      /**
       * Ideally the password would be read from a file and will be in a Buffer
       */
      let key = cryptoUtils.getKeyFromPassword(
              Buffer.from('mysecretpassword'), cryptoUtils.getSalt());
      let ciphertext = cryptoUtils.encrypt(plaintext, key);

      let decryptOutput = cryptoUtils.decrypt(ciphertext, key);

      assert.equal(decryptOutput.toString('utf8'), plaintext);
    });
  });
});
