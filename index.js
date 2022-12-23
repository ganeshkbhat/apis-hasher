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
    
    _createSHAHash, _fileContentHash, _fileContentDeHash, _fileHash, _fileDeHash, 
    _verifySHAHash, _verifyFileContentHash, _verifyHashedFile, _verifyFile,
    _encryptFile, _decryptFile, _createSign, _createSignVerify
} = require("./src/hasher.js");



module.exports.createSHA = _createSHAHash;
module.exports.hashContent = _fileContentHash;
module.exports.dehashContent = _fileContentDeHash;

module.exports.hashFile = _fileHash;
module.exports.dehashFile = _fileDeHash;

module.exports.verifySHA = _verifySHAHash;
module.exports.verifyFileContent = _verifyFileContentHash;
module.exports.verifyHashedFile = _verifyHashedFile;
module.exports.verifyFile = _verifyFile;

module.exports.encrypt = _encryptFile;
module.exports.decrypt = _decryptFile;
module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;

module.exports.getCiphers = getCiphers;
module.exports.getHashes = getHashes;

module.exports.createSign = _createSign;
module.exports.createSignVerify = _createSignVerify;


module.exports._createSHAHash = _createSHAHash;
module.exports._fileContentHash = _fileContentHash;
module.exports._fileContentDeHash = _fileContentDeHash;

module.exports._fileHash = _fileHash;
module.exports._fileDeHash = _fileDeHash;

module.exports._verifySHAHash = _verifySHAHash;
module.exports._verifyFileContentHash = _verifyFileContentHash;
module.exports._verifyHashedFile = _verifyHashedFile;
module.exports._verifyFile = _verifyFile;

module.exports._encryptFile = _encryptFile;
module.exports._decryptFile = _decryptFile;

module.exports._createSign = _createSign;
module.exports._createSignVerify = _createSignVerify;

module.exports.default = _createSHAHash;
