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

const base = require("./base.js");
const consts = require("./consts.js");
const constent = require("./constent.js");
const files = require("./files.js");
const verify = require("./verify.js");

const { getConstants, getSymbolsList } = require("./consts.js");

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

module.exports.getConstants = getConstants;
module.exports.getSymbolsList = getSymbolsList;

module.exports._createSHAHash = base.createSHA;
module.exports.createSHA = base.createSHA;

module.exports._fileContentHash = content.encrypt;
module.exports.hashContent = content.encrypt;

module.exports._fileContentDeHash = content.decrypt;
module.exports.dehashContent = content.decrypt;

module.exports._verifySHAHash = verify.verify;
module.exports.verifySHA = verify.verify;

module.exports._verifyFileContentHash = verify.contentWithChecksum;
module.exports.verifyFileContent = verify.contentWithChecksum;

module.exports._verifyFile = verify.fileWithChecksum;
module.exports.verifyFileChecksum = verify.fileWithChecksum;

module.exports.verifyHashedFile = verify.fileWithContent;
module.exports._verifyHashedFile = verify.fileWithContent;

module.exports.hashFile = files.encryptFromTo;
module.exports._fileHash = files.encryptFromTo;

module.exports._fileDeHash = files.decryptFromTo;
module.exports.dehashFile = files.decryptFromTo;

module.exports._fileHashFromContent = files.encryptContentTo;
module.exports.hashContentToFile = files.encryptContentTo;

module.exports._fileDeHashContent = files.decryptContentFrom;
module.exports.dehashContentFromFile = files.decryptContentFrom;

module.exports._fileDeHashLoadContent = files.loadContentFrom;
module.exports.dehashLoadContentFromFile = files.loadContentFrom;

module.exports.encrypt = files.encryptWithKeysFromTo;
module.exports._encryptFile = files.encryptWithKeysFromTo;

module.exports.decrypt = verify.decryptWithKeysFromTo;
module.exports._decryptFile = verify.decryptWithKeysFromTo;

module.exports._encryptWithKey = content.encryptWithKey;
module.exports.encryptWithKey = content.encryptWithKey;

module.exports._decryptWithKey = content.decryptWithKey;
module.exports.decryptWithKey = content.decryptWithKey;

module.exports._genKeyPair = base.genKeyPair;
module.exports.genKeyPair = base.genKeyPair;

module.exports._dumpKeyFile = base.dumpKeyFile;
module.exports.dumpKeyFile = base.dumpKeyFile;

module.exports.createSign = verify.createSign;
module.exports._createSign = verify.createSign;

module.exports._createSignVerify = verify.createSignVerify;
module.exports.createSignVerify = verify.createSignVerify;

module.exports.getCiphers = consts.getCiphers;
module.exports._getCiphers = consts.getCiphers;

module.exports.getHashes = getHashes;
module.exports._getHashes = getHashes;

module.exports.getDiffieHellman = consts.getDiffieHellman;
module.exports._getDiffieHellman = consts.getDiffieHellman;

module.exports.getFips = consts.getFips;
module.exports._getFips = consts.getFips;

module.exports.getRandomValues = consts.getRandomValues;
module.exports._getRandomValues = consts.getRandomValues;

module.exports.base = {
    ...bases
};

module.exports.file = {
    encrypt: files.encryptFromTo,
    decrypt: files.decryptFromTo,
    // encryptFile: files,
    // decryptFile: files,
    load: files.loadContentFrom,
    ...files
}

module.exports.content = {
    ...content
}

module.exports.crypt = {
    SHA: verify.createSHA,
    verifySHA: verify.verifySHA,
    verifyEncrypt: verify.fileWithChecksum,
    verifyContent: verify.contentWithChecksum,
    ...crypter
}
