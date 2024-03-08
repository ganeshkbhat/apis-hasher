/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: index.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const fs = require('fs');
const path = require('path');

const base = require("./src/base.js");
const consts = require("./src/consts.js");
const content = require("./src/content.js");
const files = require("./src/files.js");
const verify = require("./src/verify.js");
const openssl = require("./src/openssl.js");
const sslvalidator = require("./src/sslvalidator.js");
const securetokens = require("./src/secure.tokens.js");

const oldapis = require("./src/hasher.js");

module.exports = {
    ...oldapis
}

module.exports.base = {
    ...base,
    createSHA: base.createSHA,
    createSign: base.createSign,
    genKeyPair: base.genKeyPair,
    dumpKeyFile: base.dumpKeyFile,
};

module.exports.file = {
    ...files,
    load: files.loadContentFrom,
    encrypt: files.encryptFromTo,
    decrypt: files.decryptFromTo,
    // encryptFile: files,
    // decryptFile: files,
    dehashContentFromFile: files.decryptContentFrom,
    dehashLoadContentFromFile: files.loadContentFrom,
    encrypt: files.encryptWithKeysFromTo,
    hashFile: files.encryptFromTo,
    dehashFile: files.decryptFromTo,
    hashContentToFile: files.encryptContentTo
};

module.exports.content = {
    ...content,
    hashContent: content.encrypt,
    dehashContent: content.decrypt
}

module.exports.crypt = {
    // add hmac, hash, aes-cbc, aes-gcm, rsa-ssa, rsa-oaep 
    ...securetokens,
    SHA: verify.verify,
    verifySHA: verify.verify,
    verifyEncrypt: verify.fileWithChecksum,
    verifyContent: verify.contentWithChecksum
};

module.exports.verify = {
    ...verify,
    SHA: verify.verify,
    verifySHAHash: verify.verify,
    verifySHA: verify.verify,
    decrypt: verify.decryptWithKeysFromTo,
    verifyFileContent: verify.contentWithChecksum,
    verifyHashedFile: verify.fileWithContent
}

module.exports.openssl = openssl;

module.exports.sslvalidator = sslvalidator;

module.exports.securetokens = securetokens;

module.exports.dumpKeyFile = dumpKeyFile;

module.exports.default = {
    oldapis,
    base,
    consts,
    file,
    content,
    verify,
    openssl,
    sslvalidator,
    securetokens,
    dumpKeyFile
}
