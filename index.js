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

const { getConstants, getSymbolsList } = require("./src/consts.js");
const htps = require("./src/hasher.js");

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



// module.exports._createSHAHash = createSHA;
// module.exports.createSHA = createSHA;

// module.exports.createSign = createSign;
// module.exports._createSign = createSign;

// module.exports._genKeyPair = genKeyPair;
// module.exports.genKeyPair = genKeyPair;

// module.exports._dumpKeyFile = dumpKeyFile;
// module.exports.dumpKeyFile = dumpKeyFile;


// module.exports.getConstants = 
// module.exports.getSymbolsList = 
// module.exports.getSymbols = 
// module.exports.getCiphers = 
// module.exports.getHashes = 
// module.exports.getDiffieHellman = 
// module.exports.getFips = 
// module.exports.getRandomValues = 

// module.exports.default = {
//     getConstants,
//     getSymbolsList,
//     getSymbols,
//     getCiphers,
//     getHashes,
//     getHashes,
//     getDiffieHellman,
//     getFips,
//     getRandomValues
// }


// module.exports.encrypt = 
// module.exports.decrypt = 
// module.exports.encryptEncodeWithCipheriv = 
// module.exports.decryptDecodeWithCipheriv = 
// module.exports.encryptWithKey = 
// module.exports.decryptWithKey = 
// module.exports.encryptWithCipheriv = 
// module.exports.decryptWithCipheriv = 
// module.exports.Encrypter = Encrypter;


// module.exports.default = {
//     encrypt,
//     decrypt,
//     encryptEncodeWithCipheriv,
//     decryptDecodeWithCipheriv,
//     encryptWithKey,
//     decryptWithKey,
//     Encrypter,
//     // // encryptWithCipher,
//     // // decryptWithCipher,
//     // encryptWithCipherivJoins,
//     // decryptWithCipherivJoins,
//     encryptWithCipheriv,
//     decryptWithCipheriv
// }



// module.exports.encryptWithKeysFromTo = 
// module.exports.decryptWithKeysFromTo = 
// module.exports.encrypt = 
// module.exports.decrypt = 
// module.exports.encryptFromTo = 
// module.exports.decryptFromTo = 
// module.exports.encryptContentTo = 
// module.exports.decryptContentFrom = 
// module.exports.loadContentFrom =
// module.exports.default = {
//     encryptWithKeysFromTo,
//     decryptWithKeysFromTo,
//     encryptFromTo,
//     decryptFromTo,
//     encryptContentTo,
//     decryptContentFrom,
//     loadContentFrom
// }



// module.exports.getConstants = getConstants;
// module.exports.getSymbolsList = getSymbolsList;

// module.exports._createSHAHash = base.createSHA;
// module.exports.createSHA = base.createSHA;

// module.exports._fileContentHash = content.encrypt;
// module.exports.hashContent = content.encrypt;

// module.exports._fileContentDeHash = content.decrypt;
// module.exports.dehashContent = content.decrypt;

// module.exports._verifySHAHash = verify.verify;
// module.exports.verifySHA = verify.verify;

// module.exports._verifyFileContentHash = verify.contentWithChecksum;
// module.exports.verifyFileContent = verify.contentWithChecksum;

// module.exports._verifyFile = verify.fileWithChecksum;
// module.exports.verifyFileChecksum = verify.fileWithChecksum;

// module.exports.verifyHashedFile = verify.fileWithContent;
// module.exports._verifyHashedFile = verify.fileWithContent;

// module.exports.hashFile = files.encryptFromTo;
// module.exports._fileHash = files.encryptFromTo;

// module.exports._fileDeHash = files.decryptFromTo;
// module.exports.dehashFile = files.decryptFromTo;

// module.exports._fileHashFromContent = files.encryptContentTo;
// module.exports.hashContentToFile = files.encryptContentTo;

// module.exports._fileDeHashContent = files.decryptContentFrom;
// module.exports.dehashContentFromFile = files.decryptContentFrom;

// module.exports._fileDeHashLoadContent = files.loadContentFrom;
// module.exports.dehashLoadContentFromFile = files.loadContentFrom;

// module.exports.encrypt = files.encryptWithKeysFromTo;
// module.exports._encryptFile = files.encryptWithKeysFromTo;

// module.exports.decrypt = verify.decryptWithKeysFromTo;
// module.exports._decryptFile = verify.decryptWithKeysFromTo;

// module.exports._encryptWithKey = content.encryptWithKey;
// module.exports.encryptWithKey = content.encryptWithKey;

// module.exports._decryptWithKey = content.decryptWithKey;
// module.exports.decryptWithKey = content.decryptWithKey;

// module.exports._genKeyPair = base.genKeyPair;
// module.exports.genKeyPair = base.genKeyPair;

// module.exports._dumpKeyFile = base.dumpKeyFile;
// module.exports.dumpKeyFile = base.dumpKeyFile;

// module.exports.createSign = verify.createSign;
// module.exports._createSign = verify.createSign;

// module.exports._createSignVerify = verify.createSignVerify;
// module.exports.createSignVerify = verify.createSignVerify;

// module.exports.getCiphers = consts.getCiphers;
// module.exports._getCiphers = consts.getCiphers;

// module.exports.getHashes = getHashes;
// module.exports._getHashes = getHashes;

// module.exports.getDiffieHellman = consts.getDiffieHellman;
// module.exports._getDiffieHellman = consts.getDiffieHellman;

// module.exports.getFips = consts.getFips;
// module.exports._getFips = consts.getFips;

// module.exports.getRandomValues = consts.getRandomValues;
// module.exports._getRandomValues = consts.getRandomValues;



// module.exports.verify = 
// module.exports.SHA = 
// module.exports.contentWithChecksum = 
// module.exports.contentChecksum = 
// module.exports.checksum = 
// module.exports.fileWithChecksum = 
// module.exports.fileWithContent = 
// module.exports.createSign = 
// module.exports.createSignVerify = 


// module.exports.default = {
//     SHA: verifySHA,
//     verify: verifySHA,
//     contentChecksum: compareContentChecksum,
//     compareContentChecksum: compareContentChecksum,
//     checksum: fileWithChecksum,
//     fileWithChecksum,
//     fileWithContent,
//     createSign,
//     createSignVerify
// }


// module.exports.encryptWithKeysFromTo = 
// module.exports.decryptWithKeysFromTo = 
// module.exports.encrypt = 
// module.exports.decrypt = 
// module.exports.encryptFromTo = 
// module.exports.decryptFromTo = 
// module.exports.encryptContentTo = 
// module.exports.decryptContentFrom = 
// module.exports.loadContentFrom = 


// module.exports.default = {
//     encryptWithKeysFromTo,
//     decryptWithKeysFromTo,
//     encryptFromTo,
//     decryptFromTo,
//     encryptContentTo,
//     decryptContentFrom,
//     loadContentFrom
// }



// module.exports.getConstants = getConstants;
// module.exports.getSymbolsList = getSymbolsList;
// module.exports._createSHAHash = base.createSHA;
// module.exports.createSHA = base.createSHA;
// module.exports._fileContentHash = content.encrypt;
// module.exports.hashContent = content.encrypt;
// module.exports._fileContentDeHash = content.decrypt;
// module.exports.dehashContent = content.decrypt;
// module.exports._verifySHAHash = verify.verify;
// module.exports.verifySHA = verify.verify;
// module.exports._verifyFileContentHash = verify.contentWithChecksum;
// module.exports.verifyFileContent = verify.contentWithChecksum;
// module.exports._verifyFile = verify.fileWithChecksum;
// module.exports.verifyFileChecksum = verify.fileWithChecksum;
// module.exports.verifyHashedFile = verify.fileWithContent;
// module.exports._verifyHashedFile = verify.fileWithContent;
// module.exports.hashFile = files.encryptFromTo;
// module.exports._fileHash = files.encryptFromTo;
// module.exports._fileDeHash = files.decryptFromTo;
// module.exports.dehashFile = files.decryptFromTo;
// module.exports._fileHashFromContent = files.encryptContentTo;
// module.exports.hashContentToFile = files.encryptContentTo;
// module.exports._fileDeHashContent = files.decryptContentFrom;
// module.exports.dehashContentFromFile = files.decryptContentFrom;
// module.exports._fileDeHashLoadContent = files.loadContentFrom;
// module.exports.dehashLoadContentFromFile = files.loadContentFrom;
// module.exports.encrypt = files.encryptWithKeysFromTo;
// module.exports._encryptFile = files.encryptWithKeysFromTo;
// module.exports.decrypt = verify.decryptWithKeysFromTo;
// module.exports._decryptFile = verify.decryptWithKeysFromTo;
// module.exports._encryptWithKey = content.encryptWithKey;
// module.exports.encryptWithKey = content.encryptWithKey;
// module.exports._decryptWithKey = content.decryptWithKey;
// module.exports.decryptWithKey = content.decryptWithKey;
// module.exports._genKeyPair = base.genKeyPair;
// module.exports.genKeyPair = base.genKeyPair;
// module.exports._dumpKeyFile = base.dumpKeyFile;
// module.exports.dumpKeyFile = base.dumpKeyFile;
// module.exports.createSign = verify.createSign;
// module.exports._createSign = verify.createSign;
// module.exports._createSignVerify = verify.createSignVerify;
// module.exports.createSignVerify = verify.createSignVerify;
// module.exports.getCiphers = consts.getCiphers;
// module.exports._getCiphers = consts.getCiphers;
// module.exports.getHashes = getHashes;
// module.exports._getHashes = getHashes;
// module.exports.getDiffieHellman = consts.getDiffieHellman;
// module.exports._getDiffieHellman = consts.getDiffieHellman;
// module.exports.getFips = consts.getFips;
// module.exports._getFips = consts.getFips;
// module.exports.getRandomValues = consts.getRandomValues;
// module.exports._getRandomValues = consts.getRandomValues;


// module.exports.default = {
// 	getConstants,
// 	getSymbolsList,
// 	_createSHAHash,
// 	createSHA,
// 	_fileContentHash,
// 	hashContent, 
// 	_fileContentDeHash,
// 	dehashContent, 
// 	_verifySHAHash, 
// 	verifySHA,
// 	_verifyFileContentHash, 
// 	verifyFileContent, 
// 	_verifyFile,
// 	verifyFileChecksum, 
// 	verifyHashedFile,
// 	_verifyHashedFile, 
// 	hashFile, 
// 	_fileHash, 
// 	_fileDeHash, 
// 	dehashFile, 
// 	_fileHashFromContent, 
// 	hashContentToFile, 
// 	_fileDeHashContent, 
// 	dehashContentFromFile, 
// 	_fileDeHashLoadContent, 
// 	dehashLoadContentFromFile, 
// 	encrypt, 
// 	_encryptFile, 
// 	decrypt, 
// 	_decryptFile, 
// 	_encryptWithKey, 
// 	encryptWithKey, 
// 	_decryptWithKey, 
// 	decryptWithKey, 
// 	_genKeyPair, 
// 	genKeyPair, 
// 	_dumpKeyFile, 
// 	dumpKeyFile, 
// 	createSign, 
// 	_createSign, 
// 	_createSignVerify, 
// 	createSignVerify, 
// 	getCiphers, 
// 	_getCiphers, 
// 	getHashes, 
// 	_getHashes, 
// 	getDiffieHellman, 
// 	_getDiffieHellman, 
// 	getFips, 
// 	_getFips, 
// 	getRandomValues, 
// 	_getRandomValues
// }


// module.exports.encrypt = 
// module.exports.decrypt = 
// module.exports.encryptEncodeWithCipheriv = 
// module.exports.decryptDecodeWithCipheriv = 
// module.exports.encryptWithKey = 
// module.exports.decryptWithKey = 
// module.exports.encryptWithCipheriv = 
// module.exports.decryptWithCipheriv = 
// module.exports.Encrypter = Encrypter;


// module.exports.default = {
//     encrypt,
//     decrypt,
//     encryptEncodeWithCipheriv,
//     decryptDecodeWithCipheriv,
//     encryptWithKey,
//     decryptWithKey,
//     Encrypter,
//     // // encryptWithCipher,
//     // // decryptWithCipher,
//     // encryptWithCipherivJoins,
//     // decryptWithCipherivJoins,
//     encryptWithCipheriv,
//     decryptWithCipheriv
// }



// module.exports.getConstants = 
// module.exports.getSymbolsList = 
// module.exports.getSymbols = 
// module.exports.getCiphers = 
// module.exports.getHashes = 
// module.exports.getDiffieHellman = 
// module.exports.getFips = 
// module.exports.getRandomValues = 

// module.exports.default = {
//     getConstants,
//     getSymbolsList,
//     getSymbols,
//     getCiphers,
//     getHashes,
//     getHashes,
//     getDiffieHellman,
//     getFips,
//     getRandomValues
// }



// module.exports._createSHAHash = createSHA;
// module.exports.createSHA = createSHA;

// module.exports.createSign = createSign;
// module.exports._createSign = createSign;

// module.exports._genKeyPair = genKeyPair;
// module.exports.genKeyPair = genKeyPair;

// module.exports._dumpKeyFile = dumpKeyFile;
// module.exports.dumpKeyFile = dumpKeyFile;

// module.exports.default = {
//     _createSHAHash,
//     createSHA,
//     createSign,
//     _createSign,
//     _genKeyPair,
//     genKeyPair,
//     _dumpKeyFile,
//     dumpKeyFile
// }
