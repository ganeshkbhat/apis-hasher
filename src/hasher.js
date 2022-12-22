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
 * @param {*} remotePath
 * @param {*} options
 */
function _verifySHAHash(remotePath, options) { }

/**
 *
 *
 * @param {*} remotePath
 * @param {*} options
 */
function _verifyFileContentHash(remotePath, options) { }


module.exports.createSHA = _createSHAHash;
module.exports.verifySHA = _verifySHAHash;
module.exports.hashFile = _fileContentHash;
module.exports.dehashFile = _fileContentDeHash;
module.exports.verifyFileHash = _verifyFileContentHash;


module.exports._createSHAHash = _createSHAHash;
module.exports._fileContentHash = _fileContentHash;
module.exports._fileContentDeHash = _fileContentDeHash;
module.exports._verifySHAHash = _verifySHAHash;
module.exports._verifyFileContentHash = _verifyFileContentHash;
module.exports.default = _createSHAHash;
