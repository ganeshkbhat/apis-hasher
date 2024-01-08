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

const {
    createSHA, hashContent, dehashContent, hashFile, dehashFile,
    verifySHA, verifyFileContent, verifyHashedFile, verifyFile,
    encrypt, decrypt, createSign, createSignVerify, getCiphers, getHashes,
    genKeyPair, getConstants, getSymbolsList,
    encryptWithKey, decryptWithKey, dumpKeyFile,
    getDiffieHellman, getFips, getRandomValues,

    _createSHAHash, _fileContentHash, _fileContentDeHash,
    _fileHash, _fileDeHash, _fileHashFromContent, _fileDeHashLoadContent, _fileDeHashContent,
    _verifySHAHash, _verifyFileContentHash, _verifyHashedFile, _verifyFile,
    _encryptFile, _decryptFile, _createSign, _createSignVerify,
    _getCiphers, _getHashes, _getDiffieHellman, _getFips, _getRandomValues,
    _genKeyPair, _encryptWithKey, _decryptWithKey, _dumpKeyFile
} = require("./src/hasher.js");

let base = require("./src/base.js");
let files = require("./src/files.js");
let content = require("./src/content.js");
let crypter = require("./src/crypt.js");

module.exports.file = {
    encrypt: files.encryptFromTo,
    decrypt: files.decryptFromTo,
    // encryptFile: files,
    // decryptFile: files,
    load: files.loadContentFrom,
    ...files,
}

module.exports.content = {
    ...content
}

module.exports.crypt = {
    SHA: createSHA,
    verifySHA: verifySHA,
    verifyEncrypt: verifySHA,
    verifyContent: _verifyFileContentHash,
    ...crypter
}


