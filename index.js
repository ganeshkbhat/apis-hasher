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


module.exports.file = {
    hash: _fileHash,
    dehash: _fileDeHash,
    verifyContent: _verifyHashedFile,
    verifyChecksum: _verifyFile,
    encrypt: _encryptFile,
    decrypt: _decryptFile,
    load: _fileDeHashLoadContent,
}

module.exports.content = {
    encryptWithKey: encryptWithKey,
    decryptWithKey: decryptWithKey,
    hash: _fileContentHash,
    dehash: _fileContentDeHash,
    dehashLoad: _fileDeHashLoadContent,
    verifyContent: _verifyFileContentHash,
    verifySHA: _verifySHAHash,
    createSign: _createSign,
    createSignVerify: _createSignVerify
}

module.export.crypt = {
    SHA: createSHA,
    verifySHA: verifySHA,
    verify: _verifyFileContentHash,
    genKeyPair: genKeyPair,
    getCiphers: getCiphers,
    getHashes: getHashes,
    getDiffieHellman: getDiffieHellman,
    getFips: getFips,
    getRandomValues: getRandomValues
}


module.exports.createSHA = _createSHAHash;
module.exports.hashContent = _fileContentHash;
module.exports.dehashContent = _fileContentDeHash;

module.exports.hashFile = _fileHash;
module.exports.dehashFile = _fileDeHash;

module.exports.fileHashFromContent = _fileHashFromContent;
module.exports.fileDeHashContent = _fileDeHashContent;
module.exports.fileDeHashLoadContent = _fileDeHashLoadContent;

module.exports.verifySHA = _verifySHAHash;
module.exports.verifyFileContent = _verifyFileContentHash;
module.exports.verifyHashedFile = _verifyHashedFile;
module.exports.verifyFile = _verifyFile;

module.exports.encryptFile = _encryptFile;
module.exports.decryptFile = _decryptFile;

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;

module.exports._encryptWithKey = encryptWithKey;
module.exports._decryptWithKey = decryptWithKey;

module.exports.encryptWithKey = encryptWithKey;
module.exports.decryptWithKey = decryptWithKey;

module.exports._dumpKeyFile = _dumpKeyFile;
module.exports.dumpKeyFile = _dumpKeyFile;

module.exports._genKeyPair = _genKeyPair;
module.exports.genKeyPair = _genKeyPair;

module.exports.getCiphers = _getCiphers;
module.exports.getHashes = _getHashes;
module.exports.getDiffieHellman = getDiffieHellman;
module.exports.getFips = getFips;
module.exports.getRandomValues = getRandomValues;

module.exports._getCiphers = _getCiphers;
module.exports._getHashes = _getHashes;
module.exports._getDiffieHellman = getDiffieHellman;
module.exports._getFips = getFips;
module.exports._getRandomValues = getRandomValues;

module.exports.createSign = _createSign;
module.exports.createSignVerify = _createSignVerify;

module.exports._createSHAHash = _createSHAHash;
module.exports._fileContentHash = _fileContentHash;
module.exports._fileContentDeHash = _fileContentDeHash;

module.exports._fileHash = _fileHash;
module.exports._fileDeHash = _fileDeHash;

module.exports._fileHashFromContent = _fileHashFromContent;
module.exports._fileDeHashContent = _fileDeHashContent;
module.exports._fileDeHashLoadContent = _fileDeHashLoadContent;

module.exports._verifySHAHash = _verifySHAHash;
module.exports._verifyFileContentHash = _verifyFileContentHash;
module.exports._verifyHashedFile = _verifyHashedFile;
module.exports._verifyFile = _verifyFile;

module.exports._encryptFile = _encryptFile;
module.exports._decryptFile = _decryptFile;

module.exports._createSign = _createSign;
module.exports._createSignVerify = _createSignVerify;

module.exports.getSymbolsList = getSymbolsList;
module.exports.getConstants = getConstants;


module.exports.default = {
    createSHA, hashContent, dehashContent, hashFile, dehashFile,
    verifySHA, verifyFileContent, verifyHashedFile, verifyFile,
    encrypt, decrypt, createSign, createSignVerify,
    getCiphers, getHashes, getDiffieHellman, getFips, getRandomValues,
    genKeyPair, getConstants, getSymbolsList,
    encryptWithKey, decryptWithKey, dumpKeyFile,

    _createSHAHash, _fileContentHash, _fileContentDeHash,
    _fileHash, _fileDeHash, _fileHashFromContent, _fileDeHashLoadContent, _fileDeHashContent,
    _verifySHAHash, _verifyFileContentHash, _verifyHashedFile, _verifyFile,
    _encryptFile, _decryptFile, _createSign, _createSignVerify,
    _getCiphers, _getHashes, _getDiffieHellman, _getFips, _getRandomValues,
    _genKeyPair, _encryptWithKey, _decryptWithKey, _dumpKeyFile
};
