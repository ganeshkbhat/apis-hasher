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

const fs = require('fs');

/**
 *
 *
 * @param {string} [algorithm="sha256"] Algorythm Options: sha1, sha256, sha512
 * @param {*} data
 * @param {*} digest
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _createSHAHash(algorithm = "sha256", data, digest, options = { logger: console.log }) {
    const crypto = require('crypto');
    const hashesList = crypto.getHashes();
    if (!hashesList.includes(algorithm)) throw new Error("[_createSHAHash] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList))
    var hash = crypto.createHash(algorithm).update(JSON.stringify(data)).digest(digest);
    options.logger("[require-urls]: filelock.js._createSHAHash: Hash created is ", hash);
    return hash;
}

/**
 *
 *
 * @param { string } hashdata
 * @param { string } [algorithm=["aes-256-ctr", "sha256"]]
 * @param { string } salt
 * @param { string } [digest=['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _fileContentDeHash(hashdata, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
    const crypto = require('crypto');

    const hashesList = crypto.getHashes();
    const ciphersList = crypto.getCiphers();
    if (!hashesList.includes(keyAlgorithm)) throw new Error("[_fileContentDeHash] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList));
    if (!ciphersList.includes(algorithm)) throw new Error("[_fileContentDeHash] Ciphers Algorithm not in list of included ciphers " + JSON.stringify(ciphersList));

    const key = crypto.createHash(keyAlgorithm).update(JSON.stringify(salt)).digest(digest);
    const key_in_bytes = Buffer.from(key, digest);

    const decipher = crypto.createDecipheriv(algorithm, key_in_bytes, Buffer.from(hashdata.iv, digest));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hashdata.content, digest)), decipher.final()]);
    return decrpyted.toString();
}

/**
 *
 *
 * @param {*} data
 * @param {*} digest ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']
 * @param {*} [options={ logger: console.log }]
 * 
 * reference: https://attacomsian.com/blog/nodejs-encrypt-decrypt-data
 * 
 */
function _fileContentHash(data, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
    const crypto = require('crypto');

    const hashesList = crypto.getHashes();
    const ciphersList = crypto.getCiphers();
    if (!hashesList.includes(keyAlgorithm)) throw new Error("[_fileContentHash] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList));
    if (!ciphersList.includes(algorithm)) throw new Error("[_fileContentHash] Ciphers Algorithm not in list of included ciphers " + JSON.stringify(ciphersList));

    const iv = crypto.randomBytes(16);
    const key = crypto.createHash(keyAlgorithm).update(JSON.stringify(salt)).digest(digest);
    const key_in_bytes = Buffer.from(key, digest);

    const cipher = crypto.createCipheriv(algorithm, key_in_bytes, iv);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

    return {
        iv: iv.toString(digest),
        content: encrypted.toString(digest)
    };
}


/**
 *
 *
 * @param {string} [algorithm="sha256"]
 * @param {*} data
 * @param {*} digest
 * @param {*} hashToCheck
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _verifySHAHash(algorithm = "sha256", data, digest, hashToCheck, options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    if (hashToCheck === _createSHAHash(algorithm, data, digest, options)) return true;
}

/**
 *
 *
 * @param {*} data
 * @param {string} [algorithm="sha256"]
 * @param {*} digest
 * @param {*} hashToCheck
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _verifyFileContentHash(data, algorithm = "sha256", digest, hashToCheck, options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = _fileContentHash(data, algorithm, keyAlgorithm, salt, digest, options);
    return _verifySHAHash(algorithm, _createSHAHash(hashdata), digest, _createSHAHash(hashToCheck), options);
}

/**
 * Hash
 *
 * @param {*} remotePath
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {*} salt
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _fileHash(remotePath, remoteDestPath, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
    let data = fs.readFileSync(remotePath, {encoding: options.encoding ? options.encoding : "utf-8", flag: "r"});
    let hashdata = _fileContentHash(data, algorithm, keyAlgorithm, salt, digest, options);
    fs.writeFileSync(remoteDestPath, JSON.stringify(hashdata), {encoding: options.encoding ? options.encoding : "utf-8", flag: "w"});
    return hashdata;
}

/**
 * DeHash a hashed file
 *
 * @param {*} remotePath
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {*} salt
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _fileDeHash(remotePath, remoteDestPath, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remotePath, {encoding: options.encoding ? options.encoding : "utf-8", flag: "r"});
    let data = _fileContentDeHash(JSON.parse(hashdata), algorithm, keyAlgorithm, salt, digest, options);
    fs.writeFileSync(remoteDestPath, data);
    return data;
}

function _encryptFile(remotePath, remoteDestPath, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
    
}

function _decryptFile(remotePath, remoteDestPath, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
    
}

function _verifyFile(remotePath, algorithm = "sha256", digest, checksum, options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = fs.readFileSync(remotePath, {encoding: options.encoding ? options.encoding : "utf-8", flag: "r"});
    return _verifySHAHash(algorithm, _createSHAHash(hashdata), digest, checksum, options);
}



/**
 *
 *
 * @param {*} data
 * @param {string} [algorithm="sha256"]
 * @param {*} digest
 * @param {*} hashToCheck
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _verifyHashedFile(remotePath, algorithm = "sha256", digest, hashToCheck, options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    return _verifyFile(remotePath, algorithm = "sha256", digest, _createSHAHash(hashToCheck), options);
}


module.exports.createSHA = _createSHAHash;
module.exports.hashContent = _fileContentHash;
module.exports.dehashContent = _fileContentDeHash;
module.exports.verifySHA = _verifySHAHash;
module.exports.hashFile = _fileHash;
module.exports.dehashFile = _fileDeHash;
module.exports.verifyFileContent = _verifyFileContentHash;
module.exports.verifyHashedFile = _verifyHashedFile;

// module.exports.encryptFile = _fileHash;
// module.exports.decryptFile = _fileDeHash;
module.exports.verifyFile = _verifyFile;

module.exports._createSHAHash = _createSHAHash;
module.exports._fileContentHash = _fileContentHash;
module.exports._fileContentDeHash = _fileContentDeHash;
module.exports._verifySHAHash = _verifySHAHash;
module.exports._verifyFileContentHash = _verifyFileContentHash;
module.exports.default = _createSHAHash;
